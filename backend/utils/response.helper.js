

/**
 * @function successResponse
 * @description - Send standardized success response
 * @param {Object} res - the express request object
 * @param {String} message - A short success message
 * @param {Object|Array} data - t
 * @param {Number} statusCode - HTTP response (Default 200)
 * @returns 
 */
const successResponse = (res, message, data = null, statusCode = 200) => {
	return res.status(statusCode).json({
		success: true,
		message,
		data,
	});
};

/**
 * @function failResponse
 * @description - Send standardised failing response
 * @param {Object} res - express request object
 * @param {String} message - short failling message
 * @param {Number} statusCode - HTTP response (Default 400)
 * @returns 
 */
const failResponse = (res, message, statusCode = 400) => {
  return res.status(statusCode).json({
		success: false,
		message,
	});
};

/**
 * @function errorResponse
 * @description - Send a standardized error response
 * @param {Object} res - express request object
 * @param {Object} error - the error object
 * @param {Number} statusCode - HTTP CODE (Default 500)
 * @returns 
 */
const errorResponse = (res, error, statusCode = 500) => {
	return res.status(statusCode).json({
		success: false,
		message: error.message || "An unexpected error occured",
	});
};


module.exports = {successResponse, failResponse, errorResponse};