const express = require('express');
const NewsService = require('../services/news.service');

const router = express.Router();
const service = new NewsService();

// News main route
router.get('/', async (req, res, next) => {
	try {
		const news = await service.find();

		res.status(200).json(news);
	} catch (error) {
		next(error);
	}
});

// Add news route
router.post('/', async (req, res) => {
	const body = req.body;
	const newNews = await service.create(body);

	res.status(201).json({
		newNews,
		message: 'noticia creada',
	});
});

// Individual news route
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const oneNews = await service.findOne(id);

		res.status(200).json(oneNews);
	} catch (error) {
		next(error);
	}
});

// Edit news route
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const oneNews = await service.update(id, body);

		res.status(200).json({
			oneNews,
			message: 'noticia actualizada',
		});
	} catch (error) {
		next(error);
	}
});

// Delete news route
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const oneNews = await service.delete(id);

		res.status(200).json({
			oneNews,
			message: 'noticia eliminada',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
