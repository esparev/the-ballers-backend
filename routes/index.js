const express = require('express');

const newsRouter = require('./news.router');
const tournamentsRouter = require('./tournaments.router');
const leaguesRouter = require('./leagues.router');
const teamsRouter = require('./teams.router');
const playersRouter = require('./players.router');
const coachesRouter = require('./coaches.router');
const adminsRouter = require('./admins.router');

/**
 * Controls the routing system for modular and mountable routes
 * @param {*} app express app
 */
function routerApi(app) {
	const router = express.Router();

	// Parent route
	app.use('/api/v1', router);
	// Child routes
	router.use('/noticias', newsRouter);
	router.use('/torneos', tournamentsRouter);
	router.use('/ligas', leaguesRouter);
	router.use('/ligas/:ligaId/equipos', teamsRouter);
	router.use('/ligas/:ligaId/equipos/:equipoId/jugadores', playersRouter);
	router.use('/ligas/:ligaId/equipos/:equipoId/entrenadores', coachesRouter);
	router.use('/admins', adminsRouter);
}

module.exports = routerApi;
