const express = require('express');
const LeaguesService = require('../services/leagues.service');
const TeamsService = require('../services/teams.service');

const router = express.Router();
const leaguesService = new LeaguesService();
const teamsService = new TeamsService();

// Leagues main route
router.get('/', (req, res) => {
	const leagues = leaguesService.find();
	res.status(200).json(leagues);
});

// Add league route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'liga creada',
	});
});

// Individual league route
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const league = leaguesService.findOne(id);
	const teams = teamsService.find();

	res.status(200).json({
		league,
		teams,
	});
});

// Edit league route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	res.status(200).json({
		id,
		data: body,
		message: 'liga actualizada',
	});
});

// Delete league route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'liga eliminada',
	});
});

module.exports = router;
