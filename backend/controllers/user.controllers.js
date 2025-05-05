
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const hashModule = require("../services/hashModule");
const joi = require("joi");


const getAllUsers = async (req, res) => {

	let limit = req.query.limit || null;

	if (limit) {
		User.find()
		.limit(limit)
		.then((users) => {res.send(users)})
		.catch((err) => {res.send(`Error while fetching all the users : ${err}`)});
	} else {
		User.find()
		.then((users) => {res.send(users)})
		.catch((err) => {res.send(`Error while fetching all the users : ${err}`)});
	}
};

const getUser = (req, res) => {
	let userId = req.params.id || null;

	User.findById(userId)
	.then((user) => {res.send(user)})
	.catch((err) => {res.send(`Error while fetching the users : ${err}`)});
};

const register = async (req, res) => {
	console.log("The user : ", req.body);

	// Create the validation schema
	const userValidationSchema = joi.object({
		name: joi.string().min(3).required(),
		email: joi.string()
		.email()
		.required(),
		password: joi
		.string()
		.min(4)
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
	});

	const user = {
		...req.body
	};

	const {error, value} = userValidationSchema.validate(user);
	console.log("BY HERRE : : : !")
	if (error) {
		return res.send(`${error}`);
	} else {

		try {
			const existingUser = await User.findOne({email: user.email});
			console.log("The existing : ", existingUser);
			if (existingUser) {
				console.log("The existing user ~: ", existingUser);
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

	// Validation of the user's schema
	const userValidationSchema = joi.object({
		email: joi.string()
		.email()
		.required(),
		password: joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
	});

	const user = {
		...req.body
	};

	const {err, value} = userValidationSchema.validate(user);

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
	const token = jwt.sign( {_id: existingUser._id}, process.env.TOKEN_SECRET, { 
		expiresIn: "1h"
	});

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