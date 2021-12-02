const express = require('express');
const router = express.Router();

// Leagues main route
router.get('/', (req, res) => {
	const leagues = [];
	const { size } = req.query;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		leagues.push({
			name: `Liga ${i}`,
		});
	}

	res.json(leagues);
});

// Add league route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		body,
		message: 'liga creada',
	});
});

// Individual league route
router.get('/:ligaId', (req, res) => {
	const teams = [];
	const { size } = req.query;
	const { ligaId } = req.params;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		teams.push({
			ligaId,
			name: `Equipo ${i}`,
		});
	}

	res.json({
		ligaId,
		name: 'Liga 1',
		teams,
	});
});

// Edit league route
router.get('/:ligaId/editar', (req, res) => {
	const { ligaId } = req.params;
	res.send(`Editar liga ${ligaId}`);
});

module.exports = router;
