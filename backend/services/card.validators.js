
const joi = require("joi");


/**
 * @function validateCard
 * @description - Validate a sent object
 * @param {*} card - the card object to validate
 * @returns - An error if the validation failed, or the value
 * of the card
 */
const validateCard = (card) => {
	const cardElementValidationSchema = joi.object({
		label: joi.string().required(),
		type: joi.string().valid("firstName", "lastName", "phone", "email", "file")
		.required(),
		value: joi.alternatives().try(joi.string(), joi.number(), joi.object(), joi.array())
	});

	const cardValidationSchema = joi.object({
		title: joi.string().min(3).required(),
		user_id: joi.string().required(),
		elements: joi.array().items(cardElementValidationSchema).required()
	});

	return cardValidationSchema.validate(card);
};

module.exports = {validateCard};