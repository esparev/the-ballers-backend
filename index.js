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
	res.json({
		news: [
			{
				title: 'BEISMICH liga mundial',
				fecha: '26, octubre 2021',
				message: 'Esta es una noticia individual',
			},
			{
				title: 'BEISMICH liga mundial',
				fecha: '26, octubre 2021',
				message: 'Esta es una noticia individual',
			},
			{
				title: 'BEISMICH liga mundial',
				fecha: '26, octubre 2021',
				message: 'Esta es una noticia individual',
			},
		],
		message: 'Estas son varias noticias'
	});
});

// Individual news route
app.get('/noticias/noticia', (req, res) => {
	res.json({
		title: 'BEISMICH liga mundial',
		fecha: '26, octubre 2021',
		message: 'Esta es una noticia individual',
	});
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
