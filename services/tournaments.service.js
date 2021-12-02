const faker = require('faker/locale/es_MX');

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
				id: faker.datatype.uuid(),
				title: faker.name.title(),
				url: faker.internet.url(),
			});
		}
	}

	/**
	 * Finds all tournaments in the object array
	 * @returns all the tournaments in the array
	 */
	async find() {
		return this.tournaments;
	}

	/**
	 * Finds the tournament with the provided id
	 * @param {*} id tournament id
	 * @returns tournament that matches the id
	 */
	async findOne(id) {
		return this.tournaments.find((item) => item.id === id);
	}

	/**
	 * Creates a tournament with the provided data
	 * @param {*} data tournament data
	 * @returns tournament created
	 */
	async create(data) {
		const newTournament = {
			id: faker.datatype.uuid(),
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
		if (index === -1) {
			throw new Error('torneo no encontrado');
		}
		const tournament = this.tournaments[index];
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
			throw new Error('torneo no encontrado');
		}
		this.tournaments.splice(index, 1);
		return { id };
	}
}

module.exports = TournamentsService;
