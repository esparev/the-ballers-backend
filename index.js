const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

// Create express app
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('BEISMICH API');
});

// Middlewares
app.use(express.json());
app.use(cors());
routerApi(app);
// Error middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
