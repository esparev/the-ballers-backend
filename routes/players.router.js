const express = require('express');
const passport = require('passport');
const router = express.Router();

const PlayersService = require('../services/players.service');
const service = new PlayersService();

const validatorHandler = require('../middlewares/validator.handler');
const {
	getPlayerSchema,
	createPlayerSchema,
	updatePlayerSchema,
} = require('../schemas/player.schema');

/**
 * Players main route
 * Shows all Players
 */
router.get('/', async (req, res, next) => {
	try {
		const players = await service.find();

		res.status(200).json(players);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Player route
 * Shows the Player with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getPlayerSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const player = await service.findBySlug(slug);

			res.status(200).json(player);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add Player route
 * Creates a Player with the provided data in body
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createPlayerSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newPlayer = await service.create(body);

			res.status(201).json({
				newPlayer,
				message: 'player created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit Player route
 * Updates partial or entire data of the Player with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getPlayerSchema, 'params'),
	validatorHandler(updatePlayerSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const player = await service.update(slug, body);

			res.status(200).json({
				player,
				message: 'player updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Player route
 * Deletes the Player with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const player = await service.delete(slug);

			res.status(200).json({
				player,
				message: 'player deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
