/**
 * Handles errors and passes it to the next middleware,
 * useful for monitoring errors
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function logErrors(err, req, res, next) {
	console.log(err);
	next(err);
}

/**
 * Handles errors and shows it to the client
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function errorHandler(err, req, res, next) {
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
}

/**
 * Handles errors of boom type and shows it to the client
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	}
	next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
