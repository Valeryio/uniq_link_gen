
const jwt = require("jsonwebtoken");
const responseHandlers = require("../utils/response.helper");

/**
 * @function auth
 * @description Middleware to authenticate requests by verifying the presence and validity of a JWT token.
 *              If the token is valid, the decoded user information is attached to the request object.
 *              Otherwise, the request is denied with an appropriate error response.
 * @param {*} req - the request object
 * @param {*} res the response object
 * @param {*} next - the next function in the middlewares operations
 */
const auth = (req, res, next) => {

	try {
		// verification of the existence of the token
		// let token = req.header("Authorization");
		let token = req.cookies.token;

		if (!token || !token.startsWith("Bearer ")) {
			throw new Error("Unauthorized: your session has expired or your token is invalid.");
		}
		token = token.split(" ")[1];

		// Verification of the token validity
		const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verifiedToken;
		next();

	} catch (err) {

		if (err.name === "TokenExpiredError") {
			return responseHandlers.failResponse(res, "Session expired, please log in again", 401);
		}

		return responseHandlers.errorResponse(
			res,
			err,
			401
		);
	}
};

/**
 * @function authAdmin
 * @description Middleware to enforce access control by checking if the authenticated user has an "admin" role.
 *              This middleware assumes that the user has already been authenticated and that `req.user` is defined.
 *              If the user is not an admin, access to the requested resource is denied with a 403 status code.
 * @param {*} req - the express request object
 * @param {*} res - the express response object
 * @param {*} next - the next function in the middlewares operations
 * 
 * @note 			This middleware must always be used **after** the `auth` middleware. Using it alone will cause the
 *						req.user to be undefined and may lead to unexpected behavior.
 */
const authAdmin = (req, res, next) => {
	try {
		let { role } = req.user;

		if (role === "admin") {
			next();
		} else {
			return responseHandlers.failResponse(res,
				"Access denied: this action requires admin privileges.",
				403
			);
		}
	
	} catch (err) {
		console.error(err);
		return responseHandlers.errorResponse(
			res,
			err
		);
	}
};

/**
 * @function authorizeRoles
 * @description Middleware factory that checks if the authenticated user's
 *							role matches one of the allowed roles. If authorized, the
 *							request proceeds. Otherwise, access is denied with a
 * 							Forbidden 403 response.
 * @param {...string} authorizedRoles - List of roles allowed to access the route
 * @returns An express middleware function
 * 
 * @note This middleware must be used **after** the `auth` middleware to ensure
 * 				that the user is authenticated. Otherwise, it can lead to unexpected
 * 				behaviors.
 */
const authorizeRoles = (...authorizedRoles) => {
	return (req, res, next) => {
		try {
			const { role } = req.user;
			if (authorizedRoles.includes(role)) {
				next();
			} else {
				return responseHandlers.failResponse(
					res,
					"Access denied: this action requires other privileges",
					403
				);
			}
		} catch (err) {
			return responseHandlers.errorResponse(
				res,
				err
			);
		}
	};
};


module.exports = { authAdmin, auth, authorizeRoles };