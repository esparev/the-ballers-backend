const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
	errorHandler,
	boomErrorHandler,
} = require('./middlewares/error.handler');

// Create express app
const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
routerApi(app);
// Error middlewares
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('BEISMICH API');
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
