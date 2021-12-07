const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');
const router = express.Router();

/**
 * Login route
 * Authenticates via the local strategy without a session
 * and signs a json web token with the necessary information
 * about the admin to define its roles
 */
router.post(
	'/iniciar-sesion',
	passport.authenticate('local', { session: false }),
	async (req, res, next) => {
		try {
			const admin = req.user;
			const payload = {
				// Subject to identify the admin
				sub: admin.id,
				// Permissions of the admin
				scope: admin.isHero,
			};
			const token = jwt.sign(payload, config.jwtSecret);
			res.status(201).json({
				admin,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
