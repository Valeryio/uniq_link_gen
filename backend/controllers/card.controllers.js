

const Card = require("../models/card.model");
const services = require("../services/card.services");
const validators = require("../services/card.validators");
const responseHandlers = require("../utils/response.helper");

/**
 * @function getAllCards
 * @description Fetch all the cards from the database
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @returns {void} - the list of all the cards or an error
 */
const getAllCards = async (req, res) => {

	try {
		const cards = await services.findAll();
		return responseHandlers.successResponse(
			res,
			"Card retrieved successfully",
			cards,
		);
	} catch(err) {
		console.error(`Error while fetching all the cards : ${err.message}`);
		return responseHandlers.errorResponse(
			res,
			err,
		);
	}

};

/**
 * get a specific card with its id
 * @param {*} req 
 * @param {*} res 
 */
const getCard = async (req, res) => {

	const cardId = req.params.id;

	try {
		const result = await services.findById(cardId);
		console.log("The result : ", result);
		return responseHandlers.successResponse(
			res,
			"User retrieved successfully!",
			result
		)
	} catch(err) {
		console.error(err);
		return responseHandlers.errorResponse(
			res,
			err
		)
	}

};

/**
 * @function addCard - add a new card in the database
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @returns {void} - An error, or the updated object
 */
const addCard = async (req, res) => {

	const {error, value} = validators.validateCard(req.body)

	if (error) {
		return responseHandlers.failResponse(
			res,
			error.details[0].message
		);
	}
	
	const card = new Card({...value});

	card.save()
	.then((docs) => {
		console.log("New card added successfully!");
		return responseHandlers.successResponse(
			res,
			"New card added successfully",
			docs
		);
	})
	.catch((err) => {
		console.log(`Error while adding the card`);
		return responseHandlers.errorResponse(
			res,
			err
		);
	})
};

/**
 * @function updateCard - update a card in the database
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @returns {void} - A successfull message or an error
 */
const updateCard = async (req, res) => {

	let cardId = req.params.id;
	let result;

	try {
		result = await Card.findByIdAndUpdate(cardId, req.body,
			{new: true, runValidators: true}
		);
	} catch(err) {
		console.log(err);
		return responseHandlers.errorResponse(
			res,
			err
		);
	}

	if (!result) {
		return responseHandlers.failResponse(
			res,
			"Card not found",
			404
		);
	}
	return responseHandlers.successResponse(
		res,
		"Card updated successfully!",
		result
	);

};

/**
 * @function removeCard - remove a specific card from the database
 * @param {*} req - express request object
 * @param {*} res - express response object
 * @returns {void} - A successful message or an error
 */
const removeCard = async (req, res) => {

	const cardId = req.params.id;
	let result;

	try {
		result = await Card.findByIdAndDelete(cardId);
	} catch (err) {
		return responseHandlers.errorResponse(
			res,
			err
		);
	}

	if (!result) {
		return responseHandlers.failResponse(
			res,
			"Card not found",
			404
		);
	}

	console.log(result);
	return responseHandlers.successResponse(
		res,
		"Card deleted successfully!",
		result
	);
};



module.exports = {getAllCards, getCard, addCard, updateCard, removeCard};