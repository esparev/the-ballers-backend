const express = require('express');
const TournamentsService = require('../services/tournaments.service');

const router = express.Router();
const service = new TournamentsService();

// Tournaments main route
router.get('/', (req, res) => {
	const tournaments = service.find();

	res.status(200).json(tournaments);
});

// Add tournament route
router.post('/', (req, res) => {
	const body = req.body;
	const newTournament = service.create(body);

	res.status(201).json({
		newTournament,
		message: 'torneo creado',
	});
});

// Individual tournament route
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const tournament = service.findOne(id);

	res.status(200).json(tournament);
});

// Edit tournament route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const tournament = service.update(id, body);

	res.status(200).json({
		tournament,
		message: 'torneo actualizado',
	});
});

// Delete tournament route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const tournament = service.delete(id);

	res.status(200).json({
		tournament,
		message: 'torneo eliminado',
	});
});

module.exports = router;
