const express = require('express');
const passport = require('passport');
const router = express.Router();

/**
 * Login route
 * Authenticates via the local strategy without a session
 */
router.post(
	'/iniciar-sesion',
	passport.authenticate('local', { session: false }),
	async (req, res, next) => {
		try {
			res.status(201).json(req.admin);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
