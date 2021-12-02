const express = require('express');
const router = express.Router({ mergeParams: true });

// Add coach route
router.get('/nuevo', (req, res) => {
	const { ligaId, equipoId } = req.params;
	res.send(
		`Agregar nuevo entrenador en el equipo ${equipoId} de la liga ${ligaId} `
	);
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
