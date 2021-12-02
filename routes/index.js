const express = require('express');

const newsRouter = require('./news.router');
const tournamentsRouter = require('./tournaments.router');
const leaguesRouter = require('./leagues.router');
const teamsRouter = require('./teams.router');
const playersRouter = require('./players.router');
const coachesRouter = require('./coaches.router');
const adminsRouter = require('./admins.router');

function routerApi(app) {
	const router = express.Router();

	// Parent route
	app.use('/api/v1', router);

	router.use('/noticias', newsRouter);
	router.use('/torneos', tournamentsRouter);
	router.use('/ligas', leaguesRouter);
	router.use('/ligas/:ligaId', teamsRouter);
	router.use('/ligas/:ligaId/:equipoId/jugador', playersRouter);
	router.use('/ligas/:ligaId/:equipoId/entrenador', coachesRouter);
	router.use('/admins', adminsRouter);
}

module.exports = routerApi;
