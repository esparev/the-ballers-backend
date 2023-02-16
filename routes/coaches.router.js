const express = require('express');
const passport = require('passport');
const router = express.Router();

const CoachesService = require('../services/coaches.service');
const service = new CoachesService();

const validatorHandler = require('../middlewares/validator.handler');
const {
	getCoachSchema,
	createCoachSchema,
	updateCoachSchema,
} = require('../schemas/coach.schema');
/**
 * Coaches main route
 * Shows all Coaches
 */
router.get('/', async (req, res, next) => {
	try {
		const coaches = await service.find();

		res.status(200).json(coaches);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Coach route
 * Shows the Coach with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getCoachSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const coach = await service.findBySlug(slug);

			res.status(200).json(coach);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add Coach route
 * Creates a Coach with the provided data in body
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createCoachSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newCoach = await service.create(body);

			res.status(201).json({
				newCoach,
				message: 'coach created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit Coach route
 * Updates partial or entire data of the Coach with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getCoachSchema, 'params'),
	validatorHandler(updateCoachSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const coach = await service.update(slug, body);

			res.status(200).json({
				coach,
				message: 'coach updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Coach route
 * Deletes the Coach with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const coach = await service.delete(slug);

			res.status(200).json({
				coach,
				message: 'coach deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
