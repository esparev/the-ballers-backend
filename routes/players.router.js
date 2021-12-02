const express = require('express');
const router = express.Router({ mergeParams: true });

// Add player route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'player created',
	});
});

// Individual player route
router.get('/:jugadorId', (req, res) => {
	const { ligaId, equipoId, jugadorId } = req.params;

	res.status(200).json({
		ligaId,
		equipoId,
		jugadorId,
		name: 'Jugador 1',
	});
});

// Edit player route
router.patch('/:jugadorId', (req, res) => {
	const { jugadorId } = req.params;
	const { body } = req.body;
	res.status(200).json({
		jugadorId,
		data: body,
		message: 'jugador actualizado',
	});
});

// Delete player route
router.delete('/:jugadorId', (req, res) => {
	const { jugadorId } = req.params;
	res.status(200).json({
		jugadorId,
		message: 'jugador eliminado',
	});
});

module.exports = router;
