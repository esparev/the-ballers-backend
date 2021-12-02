const express = require('express');
const PlayersService = require('../services/players.service');

const router = express.Router({ mergeParams: true });
const service = new PlayersService();

// Add player route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'player created',
	});
});

// Individual player route
router.get('/:id', (req, res) => {
	const { id, ligaId, equipoId } = req.params;
	const player = service.findOne(id);
	res.status(200).json({
		ligaId,
		equipoId,
		player,
	});
});

// Edit player route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	res.status(200).json({
		id,
		data: body,
		message: 'jugador actualizado',
	});
});

// Delete player route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'jugador eliminado',
	});
});

module.exports = router;
