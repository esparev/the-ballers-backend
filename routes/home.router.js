const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
	res.send('Hello express server');
});

// Profile route
router.get('/perfil', (req, res) => {
	res.send('Mi perfil');
});

// About route
router.get('/conocenos', (req, res) => {
	res.send('Conocenos');
});

// Join league route
router.get('/unete', (req, res) => {
	res.send('Unete a una de nuestras ligas');
});

// Login route
router.get('/iniciar-sesion', (req, res) => {
	res.send('Bienvenido de nuevo. Inicia sesion para continuar');
});

module.exports = router;
