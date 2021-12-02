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
	res.status(201).json({
		data: body,
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
	res.status(200).json({
		id,
		data: body,
		message: 'torneo actualizado',
	});
});

// Delete tournament route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'torneo eliminado',
	});
});

module.exports = router;
