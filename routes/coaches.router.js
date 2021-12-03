const express = require('express');
const CoachesService = require('../services/coaches.service');

const router = express.Router();
const service = new CoachesService();

/**
 * Coaches main route
 * Shows all Coaches
 */
router.get('/', async (req, res, next) => {
	try {
		const coaches = await service.find();

		res.status(200).json(coaches);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Coach route
 * Shows the Coach with the provided id
 */
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const coach = await service.findOne(id);

		res.status(200).json(coach);
	} catch (error) {
		next(error);
	}
});

/**
 * Add Coach route
 * Creates a Coach with the provided data in body
 */
router.post('/', async (req, res) => {
	const body = req.body;
	const newCoach = await service.create(body);

	res.status(201).json({
		newCoach,
		message: 'entrenador creado',
	});
});

/**
 * Edit Coach route
 * Updates partial or entire data of the Coach with the provided id
 */
router.patch('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const coach = await service.update(id, body);

		res.status(200).json({
			coach,
			message: 'entrenador actualizado',
		});
	} catch (error) {
		next(error);
	}
});

/**
 * Delete Coach route
 * Deletes the Coach with the provided id
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const coach = await service.delete(id);

		res.status(200).json({
			coach,
			message: 'entrenador eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
