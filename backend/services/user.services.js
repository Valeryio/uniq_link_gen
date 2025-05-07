

const User = require("../models/user.model");
const responseHandlers = require("../utils/response.helper");


/**
 * @function findAllUsers
 * @description - find all the user's in the database, if there's no
 * 								limit. Otherwise, just take the number of user's limited
 * @param {*} limit 
 * @returns 
 */
const findAllUsers = async (limit = 0) => {
	try {
		if (!limit) {
			const users = await User.find();
			return users;
		} else {
			const users = await User
			.find()
			.limit(limit);
			return users;
		}
	} catch (err) {
		throw new Error(`Error retrieving existing users: ${err.message}`);
	}
};

/**
 * @function findUserById
 * @description - Find the user with its id attribute
 * @param {*} userId 
 * @returns The user object if found, or an error object
 */
const findUserById = async (userId) => {
	try {
		const user = await User.findById(userId);
		return user;
	} catch (err) {
		throw new Error(`Error checking existing user: ${err}`);
	}
};

/**
 * @function findUserByEmail
 * @description - Find the user with its email attribute
 * @param {*} email 
 * @returns The user object if found, or an error object
 */
const findUserByEmail = async (email) => {
	try {
		const existingUser = await User.findOne({email});
		console.log("The existing : ", existingUser);
		return existingUser;
	} catch (err) {
		throw new Error(`Error checking existing user: ${err.message}`);
	}
};

/*
const updateUser = async (userId) => {
	try {
		let result = await User.find
	}
}
*/

module.exports = {findAllUsers, findUserById, findUserByEmail};