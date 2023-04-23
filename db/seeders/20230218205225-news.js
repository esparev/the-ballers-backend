'use strict';

const { NEWS_TABLE } = require('../models/news.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(NEWS_TABLE, [
			{
				slug: 'the-ballers-club-makes-the-mlb',
				title: "The ballers' club makes the mlb",
				description: `The Ballers' club has shocked the sporting world by announcing their jump to Major League Baseball (MLB). The dominant basketball team is set to take the baseball world by storm with their athleticism, strategy, and teamwork. Despite the challenges of transitioning to a new sport, the team is confident in their talented players who excel in multiple sports.
				
				Fans see this move as an exciting new chapter in the team's history, as they seek to make their mark in a new sport. The arrival of the Ballers' club promises to inject a new level of excitement and energy into baseball, with one of the most dynamic teams in sports history taking the field.`,
				cover:
					'https://www.collinsdictionary.com/images/full/baseball_557405302_1000.jpg',
				created_at: '2022-02-18T21:08:00.190Z',
			},
			{
				slug: 'the-ballers-youth-won-their-first-trophy',
				title: "The ballers' youth won their first trophy",
				description: `The Ballers' youth team pulled off a stunning upset in their first major tournament, securing their first ever trophy against seasoned opponents. Despite being considered underdogs, they battled fiercely and showcased an impressive level of skill and determination. The fast-paced, high-energy style of play helped them defeat formidable teams, sealing their triumph in a thrilling final match.
				
				Emotional scenes of joy and elation followed the final whistle, as the young players lifted the trophy high in the air. This was a moment they had been working towards for years, and it marked the beginning of their journey as a talented group of ballers.`,
				cover:
					'https://securea.mlb.com/assets/images/5/5/2/140916552/cuts/LITTLE_LEAGUE_pdr9fsys_678kkha4.jpg',
				created_at: '2022-08-18T21:08:00.190Z',
			},
			{
				slug: 'the-ballers-club-does-it-again',
				title: "The ballers' club does it again",
				description: `The Ballers' club has once again proven their dominance in the latest tournament, securing a major victory with a stunning display of skill and teamwork. Led by their star players, they unleashed precise passes, blistering shots, and impenetrable defense, leaving their opponents scrambling.
				
				The team maintained their intensity and focus throughout each match, despite facing tough competition. This latest triumph adds to the Ballers' club's long line of successes, cementing their reputation as one of the most dominant teams in the world. They're poised to achieve even greater things in the future and cement their place in sporting history as one of the greatest teams ever.`,
				cover:
					'https://globalsportmatters.com/wp-content/uploads/2021/10/llws.jpeg',
				created_at: '2023-02-18T21:08:00.190Z',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(NEWS_TABLE, null);
	},
};
