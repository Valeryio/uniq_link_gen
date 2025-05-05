
const joi = require("joi");

/**
 * Validate the user's parameters when he is trying to
 * sign up to the application
 * @param {*} user 
 * @returns boolean - true or false depending on the result
 */
const registrationValidation = (user) => {
	const schema = joi.object({
		name: joi.string().min(3).required(),
		email: joi.string(6).min(3).required().email(),
		password: joi.string().min(6)
	});

	return schema.validate(user);
};


/**
 * Validate the user's parameters when he is trying to
 * sign up to the application
 * @param {*} user 
 * @returns boolean - true or false, depending on the result
 */
const loginValidation = (user) => {
	const schema = joi.object({
		email: joi.string(6).min(3).required().email(),
		password: joi.string().min(6)
	});

	return schema.validate(user);
};


module.exports = {registrationValidation, loginValidation};
