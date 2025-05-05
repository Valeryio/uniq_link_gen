
const jwt = require("jsonwebtoken");

/**
 * Verify the token
 * @param {*} req - the request object
 * @param {*} res - the response object
 * @param {*} next - the next function in the middlewares operations
 */
const auth = (req, res, next) => {
	let token = req.header("Authorization");
	token = token.split(" ")[1];

	if (!token) {
		return res.status(401).send(`Access denied!`);
	}

	try {
		const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verifiedToken;
		next();
	} catch (err) {
		console.error(`Error while verifying the token ${err}`);
	}
}

module.exports = auth;