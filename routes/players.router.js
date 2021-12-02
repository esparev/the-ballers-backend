const express = require('express');
const router = express.Router({ mergeParams: true });

// Add player route
router.get('/nuevo', (req, res) => {
	const { ligaId, equipoId } = req.params;
	res.send(
		`Agregar nuevo jugador en el equipo ${equipoId} de la liga ${ligaId} `
	);
});

// Individual player route
router.get('/:jugadorId', (req, res) => {
	const morePlayers = [];
	const { size } = req.query;
	const { ligaId, equipoId, jugadorId } = req.params;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		morePlayers.push({
			equipoId,
			name: `Otro jugador ${i}`,
		});
	}

	res.json({
		ligaId,
		equipoId,
		jugadorId,
		name: 'Jugador 1',
		morePlayers,
	});
});

// Edit player route
router.get('/:jugadorId/editar', (req, res) => {
	const { ligaId, equipoId, jugadorId } = req.params;
	res.send(
		`Editar jugador ${jugadorId} del equipo ${equipoId} de la liga ${ligaId}`
	);
});

module.exports = router;
