const express = require('express');
// Create express app
const app = express();
const port = 3000;

// Define route '/' and send a response to the client
app.get('/', (req, res) => {
	res.send('Hello express server');
});

// News route
app.get('/noticias', (req, res) => {
	res.json([
		{
			news: 'Noticia 1',
			title: 'BEISMICH liga mundial',
			fecha: '24, octubre 2021',
		},
		{
			news: 'Noticia 2',
			title: 'BEISMICH liga mundial',
			fecha: '25, octubre 2021',
		},
		{
			news: 'Noticia 3',
			title: 'BEISMICH liga mundial',
			fecha: '26, octubre 2021',
		},
	]);
});

// Individual news route
app.get('/noticias/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		news: 'Noticia 3',
		title: 'BEISMICH liga mundial',
		fecha: '26, octubre 2021',
	});
});

// Dynamic routing for a player with different params
app.get('/ligas/:ligaId/:equipoId/:jugadorId', (req, res) => {
	const { ligaId, equipoId, jugadorId } = req.params;
	res.json({
		ligaId,
		equipoId,
		jugadorId,
	});
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
