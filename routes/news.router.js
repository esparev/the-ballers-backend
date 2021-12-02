const express = require('express');
const router = express.Router();

// News main route
router.get('/', (req, res) => {
	const news = [];
	const { size } = req.query;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		news.push({
			title: `Noticia ${i}`,
			date: '26, octubre, 2021',
		});
	}

	res.json(news);
});

// Add news route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		data: body,
		message: 'noticia creada',
	});
});

// Individual news route
router.get('/:noticiaId', (req, res) => {
	const { noticiaId } = req.params;
	res.json({
		noticiaId,
		title: 'Noticia 1',
		fecha: '26, octubre 2021',
	});
});

// Edit tournament route
router.patch('/:noticiaId', (req, res) => {
	const { noticiaId } = req.params;
	const { body } = req.body;
	res.json({
		noticiaId,
		data: body,
		message: 'noticia actualizada',
	});
});

// Delete tournament route
router.delete('/:noticiaId', (req, res) => {
	const { noticiaId } = req.params;
	res.json({
		noticiaId,
		message: 'noticia eliminada',
	});
});

module.exports = router;
