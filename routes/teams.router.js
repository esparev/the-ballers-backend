const express = require('express');
const passport = require('passport');
const router = express.Router();

const TeamsService = require('../services/teams.service');
const service = new TeamsService();

const validatorHandler = require('../middlewares/validator.handler');
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
 * Shows the Team with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getTeamSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const team = await service.findBySlug(slug);

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
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createTeamSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newTeam = await service.create(body);

			res.status(201).json({
				newTeam,
				message: 'team created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit Team route
 * Updates partial or entire data of the Team with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getTeamSchema, 'params'),
	validatorHandler(updateTeamSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const team = await service.update(slug, body);

			res.status(200).json({
				team,
				message: 'team updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Team route
 * Deletes the Team with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const team = await service.delete(slug);

			res.status(200).json({
				team,
				message: 'team deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
