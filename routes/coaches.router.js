const express = require('express');
const router = express.Router({ mergeParams: true });

// Add coach route
router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		data: body,
		message: 'entrenador creado',
	});
});

// Individual coach route
router.get('/:entrenadorId', (req, res) => {
	const { ligaId, equipoId, entrenadorId } = req.params;

	res.status(200).json({
		ligaId,
		equipoId,
		entrenadorId,
		name: 'Entrenador 1',
	});
});

// Edit coach route
router.patch('/:entrenadorId', (req, res) => {
	const { entrenadorId } = req.params;
	const { body } = req.body;
	res.status(200).json({
		entrenadorId,
		data: body,
		message: 'entrenador actualizado',
	});
});

// Delete coach route
router.delete('/:entrenadorId', (req, res) => {
	const { entrenadorId } = req.params;
	res.status(200).json({
		entrenadorId,
		message: 'entrenador eliminado',
	});
});

module.exports = router;
