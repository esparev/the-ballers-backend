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
	res.status(201).json({
		data: body,
		message: 'noticia creada',
	});
});

// Individual news route
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const oneNews = service.findOne(id);
	res.status(200).json(oneNews);
});

// Edit tournament route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	res.status(200).json({
		id,
		data: body,
		message: 'noticia actualizada',
	});
});

// Delete tournament route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'noticia eliminada',
	});
});

module.exports = router;
