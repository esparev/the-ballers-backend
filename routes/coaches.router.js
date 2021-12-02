const express = require('express');
const CoachesService = require('../services/coaches.service');

const router = express.Router({ mergeParams: true });
const service = new CoachesService();

// Add coach route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'entrenador creado',
	});
});

// Individual coach route
router.get('/:id', (req, res) => {
	const { ligaId, equipoId, id } = req.params;
	const coach = service.findOne(id);

	res.status(200).json({
		ligaId,
		equipoId,
		coach,
	});
});

// Edit coach route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	res.status(200).json({
		id,
		data: body,
		message: 'entrenador actualizado',
	});
});

// Delete coach route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'entrenador eliminado',
	});
});

module.exports = router;
