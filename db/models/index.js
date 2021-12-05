const { Admin, AdminSchema } = require('./admin.model');
const { Address, AddressSchema } = require('./address.model');
const { League, LeagueSchema } = require('./league.model');
// const { Team, TeamSchema } = require('./team.model');
const { News, NewsSchema } = require('./news.model');
const { Tournament, TournamentSchema } = require('./tournament.model');

/**
 * Configures all the models to follow the rules of
 * each belonging schema
 * @param {*} sequelize - sequelize connection
 */
function setupModels(sequelize) {
	Admin.init(AdminSchema, Admin.config(sequelize));
	Address.init(AddressSchema, Address.config(sequelize));
	League.init(LeagueSchema, League.config(sequelize));
	// Team.init(TeamSchema, Team.config(sequelize));
	News.init(NewsSchema, News.config(sequelize));
	Tournament.init(TournamentSchema, Tournament.config(sequelize));

	// Initialize associations
	League.associate(sequelize.models);
	Address.associate(sequelize.models);
}

module.exports = setupModels;
