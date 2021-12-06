const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
require('./utils/auth');

const { checkApiKey } = require('./middlewares/auth.handler');
const {
	logErrors,
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

// Create express app
const app = express();
const port = 3000;

// Home route
app.get('/', checkApiKey, (req, res) => {
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
