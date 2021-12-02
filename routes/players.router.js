const express = require('express');
const PlayersService = require('../services/players.service');

const router = express.Router({ mergeParams: true });
const service = new PlayersService();

// Add player route
router.post('/', (req, res) => {
	const body = req.body;
	const newPlayer = service.create(body);

	res.status(201).json({
		newPlayer,
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
	const player = service.update(id, body);

	res.status(200).json({
		player,
		message: 'jugador actualizado',
	});
});

// Delete player route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const player = service.delete(id);

	res.status(200).json({
		player,
		message: 'jugador eliminado',
	});
});

module.exports = router;
