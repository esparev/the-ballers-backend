const express = require('express');
const passport = require('passport');
const router = express.Router();

const TournamentsService = require('../services/tournaments.service');
const service = new TournamentsService();

const validatorHandler = require('../middlewares/validator.handler');
const {
	getTournamentSchema,
	createTournamentSchema,
	updateTournamentSchema,
	queryTournamentSchema,
} = require('../schemas/tournament.schema');

/**
 * Tournaments main route
 * Shows all Tournaments
 */
router.get(
	'/',
	validatorHandler(queryTournamentSchema, 'query'),
	async (req, res, next) => {
		try {
			const tournaments = await service.find(req.query);

			res.status(200).json(tournaments);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Individual Tournament route
 * Shows the Tournament with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getTournamentSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const tournament = await service.findBySlug(slug);

			res.status(200).json(tournament);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add Tournament route
 * Creates a Tournament with the provided data in body
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createTournamentSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newTournament = await service.create(body);

			res.status(201).json({
				newTournament,
				message: 'tournament created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit Tournament route
 * Updates partial or entire data of the Tournament with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getTournamentSchema, 'params'),
	validatorHandler(updateTournamentSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const tournament = await service.update(slug, body);

			res.status(200).json({
				tournament,
				message: 'tournament updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Tournament route
 * Deletes the Tournament with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const tournament = await service.delete(slug);

			res.status(200).json({
				tournament,
				message: 'tournament deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
