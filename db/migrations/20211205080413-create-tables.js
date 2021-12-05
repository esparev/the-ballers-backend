'use strict';
/**
 * Create initial tables migration to prevent the creation of every table
 * every time it connects to the database via sequelize
 */
const { AdminSchema, ADMIN_TABLE } = require('../models/admin.model');
const { AddressSchema, ADDRESS_TABLE } = require('../models/address.model');
const { LeagueSchema, LEAGUE_TABLE } = require('../models/league.model');
const { TeamSchema, TEAM_TABLE } = require('../models/team.model');
const { PlayerSchema, PLAYER_TABLE } = require('../models/player.model');
const { CoachSchema, COACH_TABLE } = require('../models/coach.model');
const { NewsSchema, NEWS_TABLE } = require('../models/news.model');
const { TournamentSchema, TOURNAMENT_TABLE } = require('../models/tournament.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.createTable(ADMIN_TABLE, AdminSchema);
		await queryInterface.createTable(ADMIN_TABLE, AddressSchema);
		await queryInterface.createTable(ADMIN_TABLE, LeagueSchema);
		await queryInterface.createTable(ADMIN_TABLE, TeamSchema);
		await queryInterface.createTable(ADMIN_TABLE, PlayerSchema);
		await queryInterface.createTable(ADMIN_TABLE, CoachSchema);
		await queryInterface.createTable(ADMIN_TABLE, NewsSchema);
		await queryInterface.createTable(ADMIN_TABLE, TournamentSchema);
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable(ADMIN_TABLE);
		await queryInterface.dropTable(ADDRESS_TABLE);
		await queryInterface.dropTable(LEAGUE_TABLE);
		await queryInterface.dropTable(TEAM_TABLE);
		await queryInterface.dropTable(PLAYER_TABLE);
		await queryInterface.dropTable(COACH_TABLE);
		await queryInterface.dropTable(NEWS_TABLE);
		await queryInterface.dropTable(TOURNAMENT_TABLE);
	},
};
