

const User = require("../models/user.model");

/**
 * @function reviseUserObject
 * @description - Revise a user Object to clean the unecessary informations
 * 								and update the object, to be more secure and light.
 * @param {*} user
 * @returns An user object or nul if the input is invalid
 */
const reviseUserObject = (user) => {
	delete user.password;
	delete user.__v
	return user;
}


/**
 * @function findAllUsers
 * @description - find all the user's in the database, with an optional
 * 								limit.
 * @param {*} limit 
 * @returns 
 */
const findAllUsers = async (page = 0, limit = 0) => {
	try {
		if (!page) {
			let users = await User.find().lean();

			if (users) {
				users = users.map((user) => reviseUserObject(user));
			}

			return users;
		} else {

			const usersPerPage = 2;
			let users = await User
			.find()
			.skip((page - 1) * usersPerPage)
			.limit(usersPerPage)
			.lean();

			if (users && users.length) {
				users = users.map((user) => reviseUserObject(user));
			}
			return users || [];
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
		let user = await User.findById(userId).lean();

		if (user) {
			user = reviseUserObject(user);
		}
		return user || null;
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
		let existingUser = await User.findOne({email});
		console.log("The existing : ", existingUser);

		if (existingUser) {
			existingUser = reviseUserObject(existingUser);
		}
		return existingUser || null;
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

module.exports = { reviseUserObject, findAllUsers, findUserById, findUserByEmail };