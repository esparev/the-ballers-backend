const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const passport = require('passport');
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
const port = process.env.PORT || 3000;

// Home route
app.get('/', checkApiKey, (req, res) => {
	res.send('BEISMICH API');
});

// Middlewares
app.use(passport.initialize());
app.use(express.json());
app.use(cors());
// Router Api
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
