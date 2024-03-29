const express = require('express');
const passport = require('passport');
const router = express.Router();
const AuthService = require('../services/auth.service');
const service = new AuthService();

/**
 * Login route
 * Authenticates via the local strategy without a session
 */
router.post(
	'/login',
	passport.authenticate('local', { session: false }),
	async (req, res, next) => {
		try {
			const admin = req.user;
			res.status(201).json(service.signToken(admin));
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Recovery route
 * Recover password with email
 */
router.post('/recover', async (req, res, next) => {
	try {
		const { email } = req.body;
		const response = await service.sendRecovery(email);
		res.json(response);
	} catch (error) {
		next(error);
	}
});

/**
 * Recovery route
 * Recover password with email
 */
router.post('/change-password', async (req, res, next) => {
	try {
		const { token, newPassword } = req.body;
		const response = await service.changePassword(token, newPassword);
		res.json(response);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
