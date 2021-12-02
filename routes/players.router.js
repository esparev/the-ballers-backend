const express = require('express');
const PlayersService = require('../services/players.service');

const router = express.Router({ mergeParams: true });
const service = new PlayersService();

// Players main route
router.get('/', async (req, res, next) => {
	try {
		const players = await service.find();

		res.status(200).json(players);
	} catch (error) {
		next(error);
	}
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
router.get('/:id', async (req, res, next) => {
	try {
		const { id, ligaId, equipoId } = req.params;
		const player = await service.findOne(id);

		res.status(200).json({
			ligaId,
			equipoId,
			player,
		});
	} catch (error) {
		next(error);
	}
});

// Edit player route
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const player = await service.update(id, body);

		res.status(200).json({
			player,
			message: 'jugador actualizado',
		});
	} catch (error) {
		next(error);
	}
});

// Delete player route
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const player = await service.delete(id);

		res.status(200).json({
			player,
			message: 'jugador eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
