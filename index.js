const express = require('express');
const routerApi = require('./routes');
// Create express app
const app = express();
const port = 3000;

routerApi(app);

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
