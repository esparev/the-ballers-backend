const homeRouter = require('./home.router');
const newsRouter = require('./news.router');
const tournamentsRouter = require('./tournaments.router');
const leaguesRouter = require('./leagues.router');
const teamsRouter = require('./teams.router');
const playersRouter = require('./players.router');
const coachesRouter = require('./coaches.router');
const adminsRouter = require('./admins.router');

function routerApi(app) {
	app.use('/', homeRouter);
	app.use('/noticias', newsRouter);
	app.use('/torneos', tournamentsRouter);
	app.use('/ligas', leaguesRouter);
	app.use('/ligas/:ligaId', teamsRouter);
	app.use('/ligas/:ligaId/:equipoId/jugador', playersRouter);
	app.use('/ligas/:ligaId/:equipoId/entrenador', coachesRouter);
	app.use('/admins', adminsRouter);
}

module.exports = routerApi;
