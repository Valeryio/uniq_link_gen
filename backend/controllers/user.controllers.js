
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const services = require("../services/user.services");
const hashModule = require("../services/hashModule");
const responseHandlers = require("../utils/response.helper");
const validators = require("../services/user.validators");


/**
 * @function getAllUsers
 * @description - Fetches all the users registered in the database
 * @param {*} req - the express request object
 * @param {*} res - the express response object
 * @returns - An array of user registered, or an error object
 */
const getAllUsers = async (req, res) => {
	let limit = req.query.limit || null;
	let page = req.query.p || null;
	try {
		const users = await services.findAllUsers(page);

		return responseHandlers.successResponse(
			res,
			"Users retrieved successfully!",
			users
		);
	} catch (err) {
		responseHandlers.errorResponse(
			res,
			err
		);
	}
};

/**
 * @function getUser
 * @description - It retrieves a single user from the database
 * @param {*} req - the express request object
 * @param {*} res - the express response object
 * @returns - The user Object if it's found or an error object
 */
const getUser = async (req, res) => {
	let userId = req.params.id || null;

	try {
		const user = await services.findUserById(userId);
		return responseHandlers.successResponse(
			res,
			"User retrieved successfully!",
			user
		);
	} catch (err) {
		return responseHandlers.errorResponse(
			res,
			err
		);
	}
};

/**
 * @function register
 * @desctiption Allow the user to login after verification of its credentials
 * @param {*} req - an express request object
 * @param {*} res - an express response object
 * @returns A success response object, or an error object
 */
const register = async (req, res) => {
	// Validate the user's input
	const {error, value} = validators.validateUserRegister(req.body);
	if (error) {
		return responseHandlers.errorResponse(
			res,
			error
		);
	
	}

	// Verify if the user already exists
	try {
		const existingUser = await services.findUserByEmail(value.email);
		console.log(existingUser);
		if (existingUser) {
			return responseHandlers.failResponse(
				res,
				"The user is already registered!"
			);
		}	
	} catch (err) {
		console.error(`${err}`);
		return responseHandlers.errorResponse(
				res,
				err
		);
	}

	const userObj = new User({
		...value,
		password: await hashModule.hashPassword(req.body.password)
	});

	userObj.save()
	.then((docs) => {
		console.log(`Document saved successfully ${docs}!`);
		res.send(docs);
	})
	.catch((err) => {
		console.log(`Error while saving the document : ${err}`);
		res.send(err);
	});

};

/**
 * @function login
 * @description Allow the user to login after verifiying its credentials
 * @param {*} req - an express request object
 * @param {*} res - an express response object
 * @returns  A success response object, or an error object
 */
const login = async (req, res) => {
	// Validation of the user's input
	const {error, value} = validators.validateUserLogin(req.body);
	if (error) {
		return responseHandlers.errorResponse(
			res,
			error
		);
	}

	// Verify if the user exist
	const existingUser = await services.findUserByEmail(value.email);
	if (!existingUser) {
		return responseHandlers.failResponse(
			res,
			"The user is not registered!"
		);	
	}

	// Create and use token
	const token = jwt.sign( {_id: existingUser._id, role: existingUser.role}, process.env.TOKEN_SECRET, { 
		expiresIn: "1h"
	});
	res.header("Authorization", `Bearer ${token}`);

	// Storing the token into cookie parser
	res.cookie("token", `Bearer ${token}`, {
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		maxAge: 24 * 60 * 60 * 1000
	});

	const userInfos = {
		id: existingUser._id,
		email: existingUser.email,
		role: existingUser.role
	};

	return responseHandlers.successResponse(
		res,
		"Login successful!",
		userInfos
	);
};


const logout = async (req, res) => {
	res.clearCookie("token");
}



/**
 * @function updateUser
 * @description Update the user's infos
 * @param {*} req - the express request object
 * @param {*} res - the express response object
 * @returns - The updated object if there is a real user
 * 					an object error otherwise
 */
const updateUser = async (req, res) => {

	let userId = req.params.id;
	let updatedUser;

	try {
		updatedUser = await User.findByIdAndUpdate(userId, req.body,
			{new: true, runValidators: true}
		).lean();
	} catch (err) {
		return responseHandlers.errorResponse(
			res,
			err
		);
	}

	if (!updatedUser) {
		return responseHandlers.failResponse(
			res,
			"User not found",
			404
		);
	}

	updatedUser =	services.reviseUserObject(updatedUser);
	return responseHandlers.successResponse(
		res,
		"User updated successfully",
		updatedUser
	);

};

/**
 * @function removeUser
 * @description Remove the user's infos
 * @param {*} req - the express request object
 * @param {*} res - the express response object
 * @returns - The removed object if there is a real user
 * 					an object error otherwise
 */
const removeUser = async (req, res) => {

	let userId = req.params.id;
	let removedUser;

	console.log("THE ID : ", userId);
	try {
		removedUser = await User.findByIdAndDelete(userId).lean();
	} catch (err) {
		return responseHandlers.errorResponse(
			res,
			err
		);
	}

	if (!removedUser) {
		return responseHandlers.failResponse(
			res,
			"User not found",
			404
		);
	}

	removedUser = services.reviseUserObject(removedUser);
	return responseHandlers.successResponse(
		res,
		"User removed successfully!",
		removedUser
	);

};


module.exports = { getAllUsers, getUser, register, login, logout, updateUser, removeUser};