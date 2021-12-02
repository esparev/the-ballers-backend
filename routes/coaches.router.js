const express = require('express');
const CoachesService = require('../services/coaches.service');

const router = express.Router({ mergeParams: true });
const service = new CoachesService();

// Coaches main route
router.get('/', async (req, res) => {
	const coaches = await service.find();

	res.status(200).json(coaches);
});

// Add coach route
router.post('/', async (req, res) => {
	const body = req.body;
	const newCoach = await service.create(body);

	res.status(201).json({
		newCoach,
		message: 'entrenador creado',
	});
});

// Individual coach route
router.get('/:id', async (req, res) => {
	const { ligaId, equipoId, id } = req.params;
	const coach = await service.findOne(id);

	res.status(200).json({
		ligaId,
		equipoId,
		coach,
	});
});

// Edit coach route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const coach = await service.update(id, body);

		res.status(200).json({
			coach,
			message: 'entrenador actualizado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete coach route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const coach = await service.delete(id);

		res.status(200).json({
			coach,
			message: 'entrenador eliminado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
