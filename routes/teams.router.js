const express = require('express');
const PlayersService = require('../services/players.service');
const CoachesService = require('../services/coaches.service');
const TeamsService = require('../services/teams.service');

const router = express.Router({ mergeParams: true });
const playersService = new PlayersService();
const coachesService = new CoachesService();
const teamsService = new TeamsService();

// Add team route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'equipo creado',
	});
});

// Individual team route
router.get('/:id', (req, res) => {
	const { id, ligaId } = req.params;
	const players = playersService.find();
	const coach = coachesService.findOne(id);
	const team = teamsService.findOne(id);

	res.status(200).json({
		ligaId,
		team,
		coach,
		players,
	});
});

// Edit team route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	res.status(200).json({
		id,
		data: body,
		message: 'equipo actualizado',
	});
});

// Delete team route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'equipo eliminado',
	});
});

module.exports = router;
