const express = require('express');
const TeamsService = require('../services/teams.service');

const router = express.Router({ mergeParams: true });
const service = new TeamsService();

// Teams main route
router.get('/', async (req, res, next) => {
	try {
		const teams = await service.find();

		res.status(200).json(teams);
	} catch (error) {
		next(error);
	}
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
router.get('/:id', async (req, res, next) => {
	try {
		const { id, ligaId } = req.params;
		const team = await service.findOne(id);

		res.status(200).json({
			ligaId,
			team,
		});
	} catch (error) {
		next(error);
	}
});

// Edit team route
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const team = await service.update(id, body);

		res.status(200).json({
			team,
			message: 'equipo actualizado',
		});
	} catch (error) {
		next(error);
	}
});

// Delete team route
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const team = await service.delete(id);

		res.status(200).json({
			team,
			message: 'equipo eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
