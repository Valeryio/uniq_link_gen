
const mongoose = require("mongoose");

const cardElementSchema = mongoose.Schema({
	label: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ["firstName", "lastName", "country", "phone", "email", "file", "link"],
		required: true
	},
	value: {
		type: mongoose.Schema.Types.Mixed,
		required: true,
	}
}, {timestamps: true});

const cardSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId, ref: "User",
		required: true
	},
	elements: [cardElementSchema]
}, {timestamps: true});


const Card = mongoose.model("Card", cardSchema);
module.exports = Card;