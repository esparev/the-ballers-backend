const express = require('express');
const LeaguesService = require('../services/leagues.service');

const router = express.Router();
const service = new LeaguesService();

// Leagues main route
router.get('/', async (req, res) => {
	const leagues = await service.find();

	res.status(200).json(leagues);
});

// Add league route
router.post('/', async (req, res) => {
	const body = req.body;
	const newLeague = await service.create(body);

	res.status(201).json({
		newLeague,
		message: 'liga creada',
	});
});

// Individual league route
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const league = await service.findOne(id);

	res.status(200).json({
		league,
	});
});

// Edit league route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const league = await service.update(id, body);

		res.status(200).json({
			league,
			message: 'liga actualizada',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete league route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const league = await service.delete(id);

		res.status(200).json({
			league,
			message: 'liga eliminada',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
