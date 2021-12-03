const faker = require('faker/locale/es_MX');
const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class TournamentsService {
	constructor() {
		this.tournaments = [];
		this.generate();
	}

	/**
	 * Generates random tournaments
	 */
	generate() {
		const limit = 10;

		for (let i = 0; i < limit; i++) {
			this.tournaments.push({
				id: `${i}`,
				title: faker.name.title(),
				link: faker.internet.url(),
				cover: faker.image.imageUrl(),
			});
		}
	}

	/**
	 * Finds all tournaments in the object array
	 * @returns all the tournaments in the array
	 */
	async find() {
		const tournaments = this.tournaments;

		if (!tournaments) {
			throw boom.notFound('no hay torneos');
		}

		return tournaments;
	}

	/**
	 * Finds the tournament with the provided id
	 * @param {*} id tournament id
	 * @returns tournament that matches the id
	 */
	async findOne(id) {
		const tournament = this.tournaments.find((item) => item.id === id);

		if (!tournament) {
			throw boom.notFound('torneo no encontrado');
		}

		return tournament;
	}

	/**
	 * Creates a tournament with the provided data
	 * @param {*} data tournament data
	 * @returns tournament created
	 */
	async create(data) {
		const newTournament = {
			id: `${this.tournaments.length}`,
			...data,
		};
		this.tournaments.push(newTournament);
		return newTournament;
	}

	/**
	 * Updates partially the tournament with the provided id
	 * @param {*} id tournament id
	 * @param {*} changes tournament data to update
	 * @returns tournament updated
	 */
	async update(id, changes) {
		const index = this.tournaments.findIndex((item) => item.id === id);
		const tournament = this.tournaments[index];

		if (index === -1) {
			throw boom.notFound('torneo no encontrado');
		}

		this.tournaments[index] = {
			...tournament,
			...changes,
		};
		return this.tournaments[index];
	}

	/**
	 * Deletes the tournament with the provided id
	 * @param {*} id tournament id
	 * @returns tournament deleted
	 */
	async delete(id) {
		const index = this.tournaments.findIndex((item) => item.id === id);

		if (index === -1) {
			throw boom.notFound('torneo no encontrado');
		}

		this.tournaments.splice(index, 1);
		return { id };
	}
}

module.exports = TournamentsService;
