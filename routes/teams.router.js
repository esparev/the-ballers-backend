const express = require('express');
const TeamsService = require('../services/teams.service');

const router = express.Router();
const service = new TeamsService();
const validationHandler = require('../middlewares/validator.handler');
const {
	getTeamSchema,
	createTeamSchema,
	updateTeamSchema,
} = require('../schemas/team.schema');

/**
 * Teams main route
 * Shows all Teams
 */
router.get('/', async (req, res, next) => {
	try {
		const teams = await service.find();

		res.status(200).json(teams);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Team route
 * Shows the Team with the provided id
 */
router.get(
	'/:id',
	validationHandler(getTeamSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const team = await service.findOne(id);

			res.status(200).json(team);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add Team route
 * Creates a Team with the provided data in body
 */
router.post(
	'/',
	validationHandler(createTeamSchema, 'body'),
	async (req, res) => {
		const body = req.body;
		const newTeam = await service.create(body);

		res.status(201).json({
			newTeam,
			message: 'equipo creado',
		});
	}
);

/**
 * Edit Team route
 * Updates partial or entire data of the Team with the provided id
 */
router.patch(
	'/:id',
	validationHandler(getTeamSchema, 'params'),
	validationHandler(updateTeamSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const team = await service.update(id, body);

			res.status(200).json({
				team,
				message: 'equipo actualizado',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Team route
 * Deletes the Team with the provided id
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const team = await service.delete(id);

		res.status(200).json({
			team,
			message: 'equipo eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
