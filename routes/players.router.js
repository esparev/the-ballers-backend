const express = require('express');
const router = express.Router({ mergeParams: true });

// Add player route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		data: body,
		message: 'player created',
	});
});

// Individual player route
router.get('/:jugadorId', (req, res) => {
	const morePlayers = [];
	const { size } = req.query;
	const { ligaId, equipoId, jugadorId } = req.params;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		morePlayers.push({
			equipoId,
			name: `Otro jugador ${i}`,
		});
	}

	res.json({
		ligaId,
		equipoId,
		jugadorId,
		name: 'Jugador 1',
		morePlayers,
	});
});

// Edit player route
router.patch('/:jugadorId', (req, res) => {
	const { jugadorId } = req.params;
	const { body } = req.body;
	res.json({
		jugadorId,
		data: body,
		message: 'jugador actualizado',
	});
});

// Delete player route
router.delete('/:jugadorId', (req, res) => {
	const { jugadorId } = req.params;
	res.json({
		jugadorId,
		message: 'jugador eliminado',
	});
});

module.exports = router;
