'use strict';

const { COACH_TABLE } = require('../models/coach.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(COACH_TABLE, [
			{
				id: 1,
				slug: 'orellana',
				name: 'Antonio Javier Orellana',
				birthday: '1970-11-09',
				team_id: 1,
			},
			{
				id: 2,
				slug: 'montes',
				name: 'Jose Juan Montes',
				birthday: '1973-10-20',
				team_id: 2,
			},
			{
				id: 3,
				slug: 'lafuente',
				name: 'Jesus Maria Lafuente',
				birthday: '1969-05-11',
				team_id: 3,
			},
			{
				id: 4,
				slug: 'aimar',
				name: 'Aimar Andreu',
				birthday: '1971-04-30',
				team_id: 4,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(COACH_TABLE, null);
	},
};
