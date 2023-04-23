'use strict';

const { TEAM_TABLE } = require('../models/team.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(TEAM_TABLE, [
			{
				id: 1,
				slug: 'reactive',
				name: 'Reactive',
				manager: 'Eliseo Canales',
				club_id: 1,
			},
			{
				id: 2,
				slug: 'tigers-of-the-north',
				name: 'Tigers of the North',
				manager: 'Walter Bazaar',
				club_id: 2,
			},
			{
				id: 3,
				slug: 'hugos-ballad',
				name: "Hugo's Ballad",
				manager: 'Hugo Sanchez',
				club_id: 3,
			},
			{
				id: 4,
				slug: 'cuervos-cuervos',
				name: 'Cuervos Cuervos',
				manager: 'Chava Iglesias',
				club_id: 4,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(TEAM_TABLE, null);
	},
};
