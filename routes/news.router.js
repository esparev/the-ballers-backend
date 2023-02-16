const express = require('express');
const passport = require('passport');
const router = express.Router();

const NewsService = require('../services/news.service');
const service = new NewsService();

const validatorHandler = require('../middlewares/validator.handler');
const {
	getNewsSchema,
	createNewsSchema,
	updateNewsSchema,
	queryNewsSchema,
} = require('../schemas/news.schema');

/**
 * News main route
 * Shows all News
 */
router.get(
	'/',
	validatorHandler(queryNewsSchema, 'query'),
	async (req, res, next) => {
		try {
			const news = await service.find(req.query);

			res.status(200).json(news);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Individual News route
 * Shows the News with the provided slug
 */
router.get(
	'/:slug',
	validatorHandler(getNewsSchema, 'params'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const oneNews = await service.findBySlug(slug);

			res.status(200).json(oneNews);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add News route
 * Creates a News with the provided data in body
 */
router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(createNewsSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newNews = await service.create(body);

			res.status(201).json({
				newNews,
				message: 'news created',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Edit News route
 * Updates partial or entire data of the News with the provided slug
 */
router.patch(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	validatorHandler(getNewsSchema, 'params'),
	validatorHandler(updateNewsSchema, 'body'),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const body = req.body;
			const oneNews = await service.update(slug, body);

			res.status(200).json({
				oneNews,
				message: 'news updated',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete News route
 * Deletes the News with the provided slug
 */
router.delete(
	'/:slug',
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		try {
			const { slug } = req.params;
			const oneNews = await service.delete(slug);

			res.status(200).json({
				oneNews,
				message: 'news deleted',
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
