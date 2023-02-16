const express = require('express');

const newsRouter = require('./news.router');
const tournamentsRouter = require('./tournaments.router');
const clubsRouter = require('./clubs.router');
const teamsRouter = require('./teams.router');
const playersRouter = require('./players.router');
const coachesRouter = require('./coaches.router');
const addressesRouter = require('./addresses.router');
const adminsRouter = require('./admins.router');
const authRouter = require('./auth.router');

/**
 * Controls the routing system for modular and mountable routes
 * @param {*} app express app
 */
function routerApi(app) {
	const router = express.Router();

	// Parent route
	app.use('/api/v2', router);
	// Child routes
	router.use('/news', newsRouter);
	router.use('/tournaments', tournamentsRouter);
	router.use('/clubs', clubsRouter);
	router.use('/teams', teamsRouter);
	router.use('/players', playersRouter);
	router.use('/coaches', coachesRouter);
	router.use('/addresses', addressesRouter);
	router.use('/admins', adminsRouter);
	router.use('/auth', authRouter);
}

module.exports = routerApi;
