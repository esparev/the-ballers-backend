const express = require('express');
const router = express.Router();

// Tournaments main route
router.get('/', (req, res) => {
	const tournaments = [];
	const { size } = req.query;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		tournaments.push({
			title: `Torneo ${i}`,
			date: '26, octubre, 2021',
		});
	}

	res.status(200).json(tournaments);
});

// Add tournament route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'torneo creado',
	});
});

// Individual tournament route
router.get('/:torneoId', (req, res) => {
	const { torneoId } = req.params;
	res.status(200).json({
		torneoId,
		title: 'Torneo 3',
		fecha: '26, octubre 2021',
	});
});

// Edit tournament route
router.patch('/:torneoId', (req, res) => {
	const { torneoId } = req.params;
	const { body } = req.body;
	res.status(200).json({
		torneoId,
		data: body,
		message: 'torneo actualizado',
	});
});

// Delete tournament route
router.delete('/:torneoId', (req, res) => {
	const { torneoId } = req.params;
	res.status(200).json({
		torneoId,
		message: 'torneo eliminado',
	});
});

module.exports = router;
