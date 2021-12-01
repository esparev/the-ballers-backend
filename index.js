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
	const news = [];
	const { size } = req.query;
	const limit = size || 5;

	for (let i = 0; i < limit; i++) {
		news.push({
			title: `Noticia ${i}`,
			date: '26, octubre, 2021',
		});
	}

	res.json(news);
});

app.get('/noticias/nueva-noticia', (req, res) => {
	res.send('Agregar nueva noticia');
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
