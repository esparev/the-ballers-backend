const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class TournamentsService {
	constructor() {}

	/**
	 * Finds all tournaments in the database
	 * @returns all the tournaments in the database
	 */
	async find() {
		return [];
	}

	/**
	 * Finds the tournament with the provided id
	 * @param {number} id - tournament id
	 * @returns tournament that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a tournament with the provided data
	 * @param {*} data - tournament data
	 * @returns tournament created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the tournament with the provided id
	 * @param {number} id - tournament id
	 * @param {*} changes - tournament data to update
	 * @returns tournament updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the tournament with the provided id
	 * @param {number} id - tournament id
	 * @returns tournament deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = TournamentsService;
