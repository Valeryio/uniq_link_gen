

const Card = require("../models/card.model");

const findById = async (cardId) => {	
	try {
		const result = await Card.findOne({_id: cardId});
		console.log(" the docs : ",result);
		return result;
	} catch (err) {
		throw new Error(err.message);
	}
};

const findAll = async () => {
	try {
		const result = await Card.find();
		console.log("The docs : ", result);
		return result;
	} catch (err) {
		throw new Error(err.message);
	}
};

const findByUser = async (userId) => {
	try {
		const result = await Card.find({user_id: userId});
		console.log(" the docs : ",result);
		return result;
	} catch (err) {
		throw new Error(err.message);
	}
};


module.exports = {findAll, findById, findByUser};