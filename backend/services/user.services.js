

const User = require("../models/user.model");
const responseHandlers = require("../utils/response.helper");



const findAllUsers = async (limit = 0) => {

	try {
		if (!limit) {
			const users = User.find();
			return users;
		} else {
			const users = User.find(limit);
			return users;
		}
	} catch (err) {
		return err;
	}
};

const findUser = async (userId) => {
	try {
		const user = User.findById(userId);
		return user;
	} catch (err) {
		return err;
	}
};

const checkExistingUser = async (user) => {
	try {
		const existingUser = await User.findOne({email: value.email});
		// console.log("The existing : ", existingUser);
		return existingUser;
	} catch (err) {
		console.error(`${err}`);
		return err;
	}
};


module.exports = {findAllUsers, findUser, checkExistingUser};