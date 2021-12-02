const express = require('express');
const routerApi = require('./routes');
const {
	logErrors,
	errorHandler,
	boomErrorHandler,
} = require('./middlewares/error.handler');
// Create express app
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('Hola');
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
