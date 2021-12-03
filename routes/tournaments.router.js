const express = require('express');
const TournamentsService = require('../services/tournaments.service');

const router = express.Router();
const service = new TournamentsService();
const validationHandler = require('../middlewares/validator.handler');
const {
	getTournamentSchema,
	createTournamentSchema,
	updateTournamentSchema,
} = require('../schemas/tournament.schema');

/**
 * Tournaments main route
 * Shows all Tournaments
 */
router.get('/', async (req, res, next) => {
	try {
		const tournaments = await service.find();

		res.status(200).json(tournaments);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Tournament route
 * Shows the Tournament with the provided id
 */
router.get(
	'/:id',
	validationHandler(getTournamentSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const tournament = await service.findOne(id);

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
	validationHandler(createTournamentSchema, 'body'),
	async (req, res) => {
		const body = req.body;
		const newTournament = await service.create(body);

		res.status(201).json({
			newTournament,
			message: 'torneo creado',
		});
	}
);

/**
 * Edit Tournament route
 * Updates partial or entire data of the Tournament with the provided id
 */
router.patch(
	'/:id',
	validationHandler(getTournamentSchema, 'params'),
	validationHandler(updateTournamentSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const tournament = await service.update(id, body);

			res.status(200).json({
				tournament,
				message: 'torneo actualizado',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Tournament route
 * Deletes the Tournament with the provided id
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const tournament = await service.delete(id);

		res.status(200).json({
			tournament,
			message: 'torneo eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
