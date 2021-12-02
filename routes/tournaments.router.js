const express = require('express');
const TournamentsService = require('../services/tournaments.service');

const router = express.Router();
const service = new TournamentsService();

// Tournaments main route
router.get('/', async (req, res, next) => {
	try {
		const tournaments = await service.find();

		res.status(200).json(tournaments);
	} catch (error) {
		next(error);
	}
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
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const tournament = await service.findOne(id);

		res.status(200).json(tournament);
	} catch (error) {
		next(error);
	}
});

// Edit tournament route
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const tournament = await service.update(id, body);

		res.status(200).json({
			tournament,
			message: 'torneo actualizado',
		});
	} catch (error) {
		next(error);
	}
});

// Delete tournament route
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const tournament = await service.delete(id);

		res.status(200).json({
			tournament,
			message: 'torneo eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
