
const joi = require("joi");

const validateUserLogin = (user) => {

	// Validation of the user's schema
	const userValidationSchema = joi.object({
		email: joi.string()
		.email()
		.required(),
		password: joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
	});

	return userValidationSchema.validate(user);

};


const validateUserRegister = (user) => {

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

	return  userValidationSchema.validate(user);
}




module.exports = { validateUserLogin, validateUserRegister };