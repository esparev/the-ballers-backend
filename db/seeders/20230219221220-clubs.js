'use strict';

const { CLUB_TABLE } = require('../models/club.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(CLUB_TABLE, [
			{
				id: 1,
				slug: 'youth-club',
				name: 'Youth Club',
				responsible: 'Jacinto Perez',
				phone: '0000000000',
				age_start: 13,
				age_end: 15,
				address_id: 1,
			},
			{
				id: 2,
				slug: 'tigers-club',
				name: 'Tigers Club',
				responsible: 'Bonifacio Aroca',
				phone: '0000000000',
				age_start: 13,
				age_end: 15,
				address_id: 2,
			},
			{
				id: 3,
				slug: 'astrounats-club',
				name: 'Astronauts Club',
				responsible: 'Javier Avellana',
				phone: '0000000000',
				age_start: 13,
				age_end: 15,
				address_id: 3,
			},
			{
				id: 4,
				slug: 'cuervos-club',
				name: 'Cuervos Club',
				responsible: 'Rogelio Casals',
				phone: '0000000000',
				age_start: 13,
				age_end: 15,
				address_id: 4,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(CLUB_TABLE, null);
	},
};
