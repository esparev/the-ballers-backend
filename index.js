const express = require('express');
const routerApi = require('./routes');
// Create express app
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
	res.send('Hola');
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
