'use strict';

const { NEWS_TABLE } = require('../models/news.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(NEWS_TABLE, [
			{
				slug: 'the-ballers-club-makes-the-mlb',
				title: "The ballers' club makes the mlb",
				description:
					`In a stunning move that has sent shockwaves throughout the sporting world, the Ballers' club has announced that they will be making the jump to Major League Baseball (MLB). The team, known for their dominance in basketball, is set to take the baseball world by storm with their unique blend of athleticism, strategy, and teamwork.

					Despite the challenges that come with transitioning to a new sport, the Ballers' club is confident that they have what it takes to compete at the highest level. With a roster of talented players who excel in multiple sports, the team is well-equipped to adapt to the rigors of professional baseball and make a name for themselves on the diamond.
					
					For fans of the Ballers' club, this move represents an exciting new chapter in the team's storied history, as they take on a new challenge and seek to make their mark in a new sport. And for baseball fans around the world, the arrival of the Ballers' club promises to inject a new level of excitement and energy into the sport, as one of the most talented and dynamic teams in sports history takes the field.`,
				cover:
					'https://www.collinsdictionary.com/images/full/baseball_557405302_1000.jpg',
				created_at: '2022-02-18T21:08:00.190Z',
			},
			{
				slug: 'the-ballers-youth-won-their-first-trophy',
				title: "The ballers' youth won their first trophy",
				description:
					`In a stunning upset, the Ballers' youth team emerged victorious in their first major tournament, securing their first ever trophy. The team, comprised of talented young players, battled fiercely against their seasoned opponents, showcasing an impressive level of skill and determination on the field.

					Despite being considered underdogs throughout the tournament, the Ballers' youth team continued to defy expectations, defeating some of the most formidable teams in the competition with their fast-paced, high-energy style of play. Their triumph was sealed in a thrilling final match, where they emerged with a hard-fought victory, sending their fans into a frenzy of excitement and celebration.
					
					For many on the team, this was a moment they had been working towards for years, and the emotional scenes of joy and elation following the final whistle were a testament to their hard work and dedication. As the young players lifted the trophy high in the air, it was clear that this was just the beginning for this talented group of ballers, who had announced themselves on the world stage in the most spectacular fashion possible.`,
				cover:
					'https://securea.mlb.com/assets/images/5/5/2/140916552/cuts/LITTLE_LEAGUE_pdr9fsys_678kkha4.jpg',
				created_at: '2022-08-18T21:08:00.190Z',
			},
			{
				slug: 'the-ballers-club-does-it-again',
				title: "The ballers' club does it again",
				description:
					`In a stunning display of skill and teamwork, the Ballers' club has once again secured a major victory in their latest tournament. The team, widely regarded as one of the best in the world, dominated their opponents with a commanding performance that left no doubt as to their superiority on the court.

					Led by their star players, the Ballers' club unleashed a barrage of precise passes, blistering shots, and impenetrable defense, leaving their opponents scrambling to keep up. Despite facing some of the toughest competition in the tournament, the team showed no signs of slowing down, maintaining their intensity and focus throughout each match.
					
					For the Ballers' club, this latest triumph is just the latest in a long line of successes, as they continue to cement their reputation as one of the most dominant forces in the sport. With their sights set on even greater achievements in the future, the team is poised to continue their winning ways, and cement their place in the annals of sporting history as one of the greatest teams of all time.`,
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
