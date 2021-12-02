const express = require('express');
const router = express.Router({ mergeParams: true });

// Add coach route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		data: body,
		message: 'entrenador creado',
	});
});

// Individual coach route
router.get('/:entrenadorId', (req, res) => {
	const moreCoaches = [];
	const { size } = req.query;
	const { ligaId, equipoId, entrenadorId } = req.params;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		moreCoaches.push({
			equipoId,
			name: `Otro entrenador ${i}`,
		});
	}

	res.json({
		ligaId,
		equipoId,
		entrenadorId,
		name: 'Entrenador 1',
		moreCoaches,
	});
});

// Edit coach route
router.patch('/:entrenadorId', (req, res) => {
	const { entrenadorId } = req.params;
	const { body } = req.body;
	res.json({
		entrenadorId,
		data: body,
		message: 'entrenador actualizado',
	});
});

// Delete coach route
router.delete('/:entrenadorId', (req, res) => {
	const { entrenadorId } = req.params;
	res.json({
		entrenadorId,
		message: 'entrenador eliminado',
	});
});

module.exports = router;
