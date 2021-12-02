const express = require('express');
const router = express.Router({ mergeParams: true });

// Add coach route
router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		body,
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
router.get('/:entrenadorId/editar', (req, res) => {
	const { ligaId, equipoId, entrenadorId } = req.params;
	res.send(
		`Editar entrenador ${entrenadorId} del equipo ${equipoId} de la liga ${ligaId}`
	);
});

module.exports = router;
