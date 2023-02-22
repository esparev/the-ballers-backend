'use strict';

const { PLAYER_TABLE } = require('../models/player.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(PLAYER_TABLE, [
			{
				slug: 'mohamed',
				name: 'Mohamed Agudo',
				position: 'Catcher',
				birthday: '2009-12-16',
				team_id: 1,
			},
			{
				slug: 'cuellar',
				name: 'Jesus Antonio Cuellar',
				position: 'Catcher',
				birthday: '2009-03-22',
				team_id: 1,
			},
			{
				slug: 'cheran',
				name: 'Alan Mololongo',
				position: 'Catcher',
				birthday: '2009-02-05',
				team_id: 1,
			},
			{
				slug: 'alanbrito',
				name: 'Alan Brito',
				position: 'Catcher',
				birthday: '2009-09-14',
				team_id: 1,
			},
			{
				slug: 'avellana',
				name: 'Javier Avellana',
				position: 'Catcher',
				birthday: '2009-05-26',
				team_id: 1,
			},
			{
				slug: 'bonifacio',
				name: 'Bonifacio Aroca',
				position: 'Catcher',
				birthday: '2010-10-10',
				team_id: 2,
			},
			{
				slug: 'lalo-vaquero',
				name: 'Eduardo Jose Vaquero',
				position: 'Catcher',
				birthday: '2009-09-09',
				team_id: 2,
			},
			{
				slug: 'albatros',
				name: 'Luis Francisco Alba',
				position: 'Catcher',
				birthday: '2011-11-11',
				team_id: 2,
			},
			{
				slug: 'federico',
				name: 'Federico Vargas',
				position: 'Catcher',
				birthday: '2009-09-09',
				team_id: 2,
			},
			{
				slug: 'hipolito',
				name: 'Hipolito de Castro',
				position: 'Catcher',
				birthday: '2010-01-10',
				team_id: 2,
			},
			{
				slug: 'rey',
				name: 'Rafael Rey',
				position: 'Catcher',
				birthday: '2011-11-01',
				team_id: 3,
			},
			{
				slug: 'jacinto',
				name: 'Jacinto Perez',
				position: 'Catcher',
				birthday: '2008-08-28',
				team_id: 3,
			},
			{
				slug: 'agustin',
				name: 'Agustin Pérez',
				position: 'Catcher',
				birthday: '2009-06-16',
				team_id: 3,
			},
			{
				slug: 'german',
				name: 'German Bermejo',
				position: 'Catcher',
				birthday: '2009-02-13',
				team_id: 3,
			},
			{
				slug: 'rufino',
				name: 'Rufino Sandoval',
				position: 'Catcher',
				birthday: '2009-12-09',
				team_id: 3,
			},
			{
				slug: 'triple-p',
				name: 'Pedro Pablo Plaza',
				position: 'Catcher',
				birthday: '2009-11-12',
				team_id: 4,
			},
			{
				slug: 'florin',
				name: 'Florin Miguel',
				position: 'Catcher',
				birthday: '2009-07-16',
				team_id: 4,
			},
			{
				slug: 'charly',
				name: 'Carlos Antonio Becerra',
				position: 'Catcher',
				birthday: '2010-03-27',
				team_id: 4,
			},
			{
				slug: 'iker',
				name: 'Iker Carrascosa',
				position: 'Catcher',
				birthday: '2009-03-20',
				team_id: 4,
			},
			{
				slug: 'luismi',
				name: 'Luis Alfonso Salinas',
				position: 'Catcher',
				birthday: '2009-06-02',
				team_id: 4,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(PLAYER_TABLE, null);
	},
};
