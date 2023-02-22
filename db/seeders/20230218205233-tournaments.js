'use strict';

const { TOURNAMENT_TABLE } = require('../models/tournament.model');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(TOURNAMENT_TABLE, [
			{
				slug: 'ballers-youth-club-won-the-2022-tournament',
				title: "Ballers' youth club won the 2022 tournament",
				description:
					`In a thrilling display of skill and determination, the Ballers' youth club emerged victorious in the highly anticipated 2022 tournament. The team, comprised of some of the most talented young athletes in the sport, battled fiercely against a field of tough opponents, showcasing their impressive abilities and tenacity in every match.

					From the opening rounds of the tournament, it was clear that the Ballers' youth club was a team to be reckoned with. With a fast-paced, high-energy style of play that left their opponents reeling, the team dominated the competition, racking up win after win and leaving no doubt as to their dominance on the court.
					
					As the tournament progressed, the Ballers' youth club faced increasingly tough challenges, but they rose to the occasion with skill and grace, never losing sight of their ultimate goal. And in the final match of the tournament, they proved once and for all that they were the team to beat, defeating their opponents with a commanding performance that left no doubt as to their superiority.
					
					For the young players on the Ballers' youth club, this victory represents the culmination of years of hard work and dedication, and a testament to their talent and perseverance. And for fans of the sport, it is a thrilling reminder of the excitement and drama that can unfold on the court, as the best and brightest young athletes compete for glory and the chance to make their mark on the world stage.`,
				cover:
					'https://www.shreveportdixiebaseball.com/portals/52137/contentrotator/contentrotator637601268013542098.png',
				created_at: '2022-08-18T21:08:00.190Z',
			},
			{
				slug: 'ballers-tournament-2023',
				title: "Ballers' tournament 2023",
				description:
					`The highly anticipated Ballers' Tournament 2023 is set to showcase some of the most talented and dynamic basketball teams in the world, as they compete for the chance to be crowned champions and cement their place in the annals of sporting history.

					With a roster of top-tier teams from across the globe, the Ballers' Tournament promises to be an unforgettable event, featuring thrilling games, stunning displays of athleticism, and a level of competition that is second to none. From established powerhouses to up-and-coming challengers, the tournament is sure to feature a wide range of styles and strategies, as teams battle it out for supremacy on the court.
					
					For fans of the sport, the Ballers' Tournament represents a chance to witness the very best in basketball, and to experience the excitement and energy of a world-class sporting event. And for the players themselves, it is an opportunity to prove themselves against the toughest competition in the world, and to demonstrate their skills and abilities on a global stage.
					
					As the tournament approaches, anticipation is building, and fans and players alike are gearing up for what promises to be an unforgettable display of basketball talent and passion. So mark your calendars, grab your tickets, and get ready for the Ballers' Tournament 2023 – it's going to be a tournament for the ages!`,
				cover:
					'https://www.shreveportdixiebaseball.com/portals/52137/contentrotator/contentrotator637438250744259563.png',
				created_at: '2023-02-18T21:08:00.190Z',
			},
			{
				slug: 'the-ballers-youth-club-is-ready-for-the-2023-tournament',
				title: "The ballers' youth club is ready for the 2023 tournament",
				description:
					`As the highly anticipated Ballers' Tournament 2023 draws near, the Ballers' youth club is gearing up for what promises to be an unforgettable display of basketball talent and passion. With a roster of some of the most talented young athletes in the sport, the team is poised to take on the competition and show the world what they're made of.

					From the outset, the Ballers' youth club has been a force to be reckoned with, displaying a level of skill, athleticism, and teamwork that belies their age. And as they prepare for the tournament, they are more determined than ever to prove themselves against the toughest competition in the world, and to show that they have what it takes to be champions.
					
					Led by a talented and experienced coaching staff, the Ballers' youth club is honing their skills, refining their strategies, and fine-tuning every aspect of their game in preparation for the tournament. And with a deep bench of talented players who excel in all areas of the sport, the team is well-positioned to adapt to any challenge that comes their way.
					
					For fans of the sport, the Ballers' youth club represents the future of basketball, and a testament to the power of hard work, dedication, and a love of the game. And as they take the court at the Ballers' Tournament 2023, they will be carrying the hopes and dreams of fans around the world, and showing that the future of basketball is in good hands.`,
				cover:
					'https://flipgive.imgix.net/images/stories/photos/000/000/005/original/baseball-A.png?ch=Width%2CDPR%2CSave-Data&auto=format%2Ccompress&dpr=2&w=824&h=500&fit=crop',
				created_at: '2023-01-13T21:08:00.190Z',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(TOURNAMENT_TABLE, null);
	},
};
