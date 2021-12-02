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
router.get('/nueva', (req, res) => {
	res.send('Agregar nueva noticia');
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

// Edit news route
router.get('/:noticiaId/editar', (req, res) => {
	const { noticiaId } = req.params;
	res.send(`Editar noticia ${noticiaId}`);
});

module.exports = router;
