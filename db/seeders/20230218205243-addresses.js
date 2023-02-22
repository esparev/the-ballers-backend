'use strict';

const { ADDRESS_TABLE } = require('../models/address.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(ADDRESS_TABLE, [
			{
				id: 1,
				street_name: 'Jump Street',
				street_number: '21',
				zip_code: '95076',
				suburb: 'Watsonville',
				location: 'California',
			},
			{
				id: 2,
				street_name: 'Elm Street',
				street_number: '1428',
				zip_code: '90046',
				suburb: 'Los Angeles',
				location: 'California',
			},
			{
				id: 3,
				street_name: 'Baker Street',
				street_number: '21',
				zip_code: '58570',
				suburb: 'Panindicuaro',
				location: 'Michoacan',
			},
			{
				id: 4,
				street_name: 'Evergreen Terrace',
				street_number: '25',
				zip_code: '65803',
				suburb: 'Springfield',
				location: 'Missouri',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(ADDRESS_TABLE, null);
	},
};
