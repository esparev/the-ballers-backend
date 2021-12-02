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
	const newTeam = teamsService.create(body);

	res.status(201).json({
		newTeam,
		message: 'equipo creado',
	});
});

// Individual team route
router.get('/:id', (req, res) => {
	const { id, ligaId } = req.params;
	const team = teamsService.findOne(id);
	const players = playersService.find();
	const coaches = coachesService.find();

	res.status(200).json({
		ligaId,
		team,
		coaches,
		players,
	});
});

// Edit team route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const team = teamsService.update(id, body);

	res.status(200).json({
		team,
		message: 'equipo actualizado',
	});
});

// Delete team route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const team = teamsService.delete(id);

	res.status(200).json({
		team,
		message: 'equipo eliminado',
	});
});

module.exports = router;
