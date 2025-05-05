
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true,
		min: 6
	},
	role: {
		type: String,
		required: true,
		default: "user"
	}
});
	
const User = mongoose.model("user", userSchema);
module.exports = User;

