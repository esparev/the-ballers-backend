const express = require('express');
const router = express.Router({ mergeParams: true });

// Add team route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		data: body,
		message: 'equipo creado',
	});
});

// Individual team route
router.get('/:equipoId', (req, res) => {
	const players = [];
	const { size } = req.query;
	const { ligaId, equipoId } = req.params;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		players.push({
			equipoId,
			name: `Jugador ${i}`,
		});
	}

	res.json({
		ligaId,
		equipoId,
		name: 'Equipo 1',
		coach: {
			equipoId,
			name: 'Entrenador',
		},
		players,
	});
});

// Edit team route
router.patch('/:equipoId', (req, res) => {
	const { equipoId } = req.params;
	const { body } = req.body;
	res.json({
		equipoId,
		data: body,
		message: 'equipo actualizado',
	});
});

// Delete team route
router.delete('/:equipoId', (req, res) => {
	const { equipoId } = req.params;
	res.json({
		equipoId,
		message: 'equipo eliminado',
	});
});

module.exports = router;
