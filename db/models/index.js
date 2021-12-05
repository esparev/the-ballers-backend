const { Admin, AdminSchema } = require('./admin.model');
const { League, LeagueSchema } = require('./league.model');
const { News, NewsSchema } = require('./news.model');
const { Tournament, TournamentSchema } = require('./tournament.model');

/**
 * Configures all the models to follow the rules of
 * each belonging schema
 * @param {*} sequelize - sequelize connection
 */
function setupModels(sequelize) {
	Admin.init(AdminSchema, Admin.config(sequelize));
	League.init(LeagueSchema, League.config(sequelize));
	News.init(NewsSchema, News.config(sequelize));
	Tournament.init(TournamentSchema, Tournament.config(sequelize));
}

module.exports = setupModels;
