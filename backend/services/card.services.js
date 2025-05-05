

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


module.exports = {findById};