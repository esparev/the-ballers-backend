'use strict';

const { ADMIN_TABLE } = require('../models/admin.model');

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.bulkInsert(ADMIN_TABLE, [
			{
				is_hero: true,
				name: 'JoseMa Esparev',
				email: 'esparev@hotmail.com',
				password:
					'$2b$13$dljcz53YfZHHKJI6igQXIOxXo7r.p4aEf2sIWKd5P/6awtZVdctnW',
				image: '',
			},
		]);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete(ADMIN_TABLE, null);
	},
};