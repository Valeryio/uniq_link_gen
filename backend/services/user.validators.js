
const joi = require("joi");

//	.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
// ^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$
// Create the validation schema
const registrationSchema = joi.object({
	name: joi.string().min(3).required(),
	email: joi.string()
	.email()
	.required(),
	password: joi
	.string()
	.min(4)
	.max(30)
	.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{3,15}$/))
	.required(),
	country: joi.string(),
	phone: joi.number()
}).unknown(false);

// Validation of the user's schema
const userValidationSchema = joi.object({
	email: joi.string()
	.email()
	.required(),
	password: joi.string()
	.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{3,15}$/))
}).unknown(false);


/**
 * @function validateUserRegister
 * @description - This function is used to validate user's
 * 							inputs in the registration process
 * @param {*} user 
 * @returns - The user's object infos if the validation
 * 					criteria are checked, or an error object
 * 
 * @todo Update the min lenght to 8 
 */
const validateUserRegister = (user) => {
	return  registrationSchema.validate(user, {abordEarly: false});
};

/**
 * @function validateUserLogin
 * @description - This function is used to validate user's
 * 							inputs in the login process
 * @param {*} user 
 * @returns - The user's object infos if the validation
 * 					criteria are checked, or an error object
 * 
 * @todo Update the min lenght to 8 
 */
const validateUserLogin = (user) => {
	return userValidationSchema.validate(user, {abordEarly: false});
};

module.exports = { validateUserLogin, validateUserRegister };