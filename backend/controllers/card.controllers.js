
const Card = require("../models/card.model");
const joi = require("joi");

/**
 * @function getAllCards
 * @description Fetch all the cards from the database
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @returns {void} - the list of all the cards or an error
 */
const getAllCards = async (req, res) => {

	Card.find()
	.then((docs) => {
		return res.send(docs)
	})
	.catch((err) => {
		console.error(`Error while fetching all the cards : ${err.message}`);
		return res.json({
			status: "fail",
			message: err.message
		});
	})

};

/**
 * get a specific card with its id
 * @param {*} req 
 * @param {*} res 
 */
const getCard = (req, res) => {

	const cardId = req.params.id;

	Card.find({_id: cardId})
	.then((docs) => {
		console.log(docs);
		return res.send(docs);
	})
	.catch((err) => {
		console.error(err);
		return res.send(err.message);
	});

};

const addCard = (req, res) => {

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

	const {error, value} = cardValidationSchema.validate(req.body)

	if (error) {
		return res.send(error.details[0].message);
	}
	
	const card = new Card({...req.body});
	
	card.save()
	.then((docs) => {
		console.log("New card added successfully!");
		return res.send(docs)
	})
	.catch((err) => {
		console.log(`Error while adding the card`);
		return res.send(err)
	})
};

const updateCard = (req, res) => {

};

const removeCard = (req, res) => {

};

module.exports = {getAllCards, getCard, addCard, updateCard, removeCard};