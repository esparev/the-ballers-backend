'use strict';

const { ADMIN_TABLE } = require('../models/admin.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(ADMIN_TABLE, [
			{
				is_hero: true,
				name: 'JoseMa Esparev',
				email: 'esparev@hotmail.com',
				password: 'password123',
				image: '',
			},
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(ADMIN_TABLE, null);
	},
};
