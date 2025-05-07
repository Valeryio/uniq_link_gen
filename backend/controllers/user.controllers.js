
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const services = require("../services/user.services");
const hashModule = require("../services/hashModule");
// const joi = require("joi");
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
	try {
		const users = await services.findAllUsers(limit)

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
		const user = await services.findUser(userId);
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

	/*
	User.findById(userId)
	.then((user) => {res.send(user)})
	.catch((err) => {res.send(`Error while fetching the users : ${err}`)});
*/

};

const register = async (req, res) => {
	console.log("The user : ", req.body);

	const {error, value} = validators.validateUserRegister(req.body);

	console.log("BY HERRE : : : !")
	if (error) {
		return res.send(`${error}`);
	} else {

		try {
			const existingUser = await User.findOne({email: value.email});
			// console.log("The existing : ", existingUser);
			if (existingUser) {
				// console.log("The existing user ~: ", existingUser);
				return res.json({status: "fail", message: "The user is already registered!"});
			}
		} catch (err) {
			console.error(`${err}`);
			return res.json({message: err.message});
		}

		console.log(`The user schema validation is : ${value}, password : ${req.body.password}`);
		let password = await hashModule.hashPassword(req.body.password)

		const userObj = new User({
			...req.body,
			password: password
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
	}
};

const login = async (req, res) => {

	console.log(req.body);

	const {err, value} = validators.validateUserLogin(req.body);

	if(err) {
		return res.send(err.message);
	}

	// Verify if the user exist
	const existingUser = await User.findOne({"email": req.body.email});
	if (!existingUser) {
		return res.send(`The user is not registered in our system!`);
	}
	
	if (err) {                   
		return res.send(`${err}`);
	}

	// Create and use token
	const token = jwt.sign( {_id: existingUser._id, role: existingUser.role}, process.env.TOKEN_SECRET, { 
		expiresIn: "1h"
	});

	console.log(existingUser);

	res.header("Authorization", `Bearer ${token}`);

	res.status(200).json({
		status: "success",
		message: "Login successful!", 
		infos: {
		id: existingUser._id,
		email: existingUser.email,
		role: existingUser.role
	}
});

};

const update = (req, res) => {

};

const remove = (req, res) => {

};


module.exports = { getAllUsers, getUser, register, login, update, remove};