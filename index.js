const express = require('express');
// Create express app
const app = express();
const port = 3000;

// Define route '/' and send a response to the client
app.get('/', (req, res) => {
	res.send('Hello express server');
});

// Listen express app in port
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
