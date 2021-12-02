const express = require('express');
const TeamsService = require('../services/teams.service');

const router = express.Router({ mergeParams: true });
const service = new TeamsService();

// Teams main route
router.get('/', async (req, res) => {
	const teams = await service.find();

	res.status(200).json(teams);
});

// Add team route
router.post('/', async (req, res) => {
	const body = req.body;
	const newTeam = await service.create(body);

	res.status(201).json({
		newTeam,
		message: 'equipo creado',
	});
});

// Individual team route
router.get('/:id', async (req, res) => {
	const { id, ligaId } = req.params;
	const team = await service.findOne(id);

	res.status(200).json({
		ligaId,
		team,
	});
});

// Edit team route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const team = await service.update(id, body);

		res.status(200).json({
			team,
			message: 'equipo actualizado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete team route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const team = await service.delete(id);

		res.status(200).json({
			team,
			message: 'equipo eliminado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
