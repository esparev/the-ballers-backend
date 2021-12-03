/**
 * Handles errors and shows it to the client
 * @param {*} err error
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next middleware
 */
function errorHandler(err, req, res, next) {
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
}

/**
 * Handles errors of boom type and shows it to the client
 * @param {*} err error
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next middleware
 */
function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	}
	next(err);
}

module.exports = { errorHandler, boomErrorHandler };
