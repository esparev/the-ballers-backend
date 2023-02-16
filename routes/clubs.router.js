const express = require('express');
const passport = require('passport');
const router = express.Router();

const ClubsService = require('../services/clubs.service');
const service = new ClubsService();

const validatorHandler = require('../middlewares/validator.handler');
const {
	getClubSchema,
	createClubSchema,
	updateClubSchema,
} = require('../schemas/club.schema');

/**
 * Clubs main route
 * Shows all clubs
 */
router.get('/', async (req, res, next) => {
	try {
		const clubs = await service.find();

		res.status(200).json(clubs);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual club route
 * Shows the club with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getClubSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const club = await service.findBySlug(slug);

			res.status(200).json(club);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add club route
 * Creates a club with the provided data in body
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createClubSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newClub = await service.create(body);

			res.status(201).json({
				newClub,
				message: 'club created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit club route
 * Updates partial or entire data of the club with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getClubSchema, 'params'),
	validatorHandler(updateClubSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const club = await service.update(slug, body);

			res.status(200).json({
				club,
				message: 'club updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete club route
 * Deletes the club with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const club = await service.delete(slug);

			res.status(200).json({
				club,
				message: 'club deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
