const express = require('express');
const NewsService = require('../services/news.service');

const router = express.Router();
const service = new NewsService();

// News main route
router.get('/', (req, res) => {
	const news = service.find();

	res.status(200).json(news);
});

// Add news route
router.post('/', (req, res) => {
	const body = req.body;
	const newNews = service.create(body);

	res.status(201).json({
		newNews,
		message: 'noticia creada',
	});
});

// Individual news route
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const oneNews = service.findOne(id);

	res.status(200).json(oneNews);
});

// Edit news route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const oneNews = service.update(id, body);

	res.status(200).json({
		oneNews,
		message: 'noticia actualizada',
	});
});

// Delete news route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const oneNews = service.delete(id);

	res.status(200).json({
		oneNews,
		message: 'noticia eliminada',
	});
});

module.exports = router;
