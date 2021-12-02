const express = require('express');
const PlayersService = require('../services/players.service');

const router = express.Router({ mergeParams: true });
const service = new PlayersService();

// Players main route
router.get('/', async (req, res) => {
	const players = await service.find();

	res.status(200).json(players);
});

// Add player route
router.post('/', async (req, res) => {
	const body = req.body;
	const newPlayer = await service.create(body);

	res.status(201).json({
		newPlayer,
		message: 'player created',
	});
});

// Individual player route
router.get('/:id', async (req, res) => {
	const { id, ligaId, equipoId } = req.params;
	const player = await service.findOne(id);

	res.status(200).json({
		ligaId,
		equipoId,
		player,
	});
});

// Edit player route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const player = await service.update(id, body);

		res.status(200).json({
			player,
			message: 'jugador actualizado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete player route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const player = await service.delete(id);

		res.status(200).json({
			player,
			message: 'jugador eliminado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
