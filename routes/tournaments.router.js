const express = require('express');
const TournamentsService = require('../services/tournaments.service');

const router = express.Router();
const service = new TournamentsService();

// Tournaments main route
router.get('/', async (req, res) => {
	const tournaments = await service.find();

	res.status(200).json(tournaments);
});

// Add tournament route
router.post('/', async (req, res) => {
	const body = req.body;
	const newTournament = await service.create(body);

	res.status(201).json({
		newTournament,
		message: 'torneo creado',
	});
});

// Individual tournament route
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const tournament = await service.findOne(id);

	res.status(200).json(tournament);
});

// Edit tournament route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const tournament = await service.update(id, body);

		res.status(200).json({
			tournament,
			message: 'torneo actualizado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete tournament route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const tournament = await service.delete(id);

		res.status(200).json({
			tournament,
			message: 'torneo eliminado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
