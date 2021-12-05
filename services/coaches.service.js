const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class CoachesService {
	constructor() {}

	/**
	 * Finds all coaches in the database
	 * @returns all the coaches in the database
	 */
	async find() {
		return [];
	}

	/**
	 * Finds the coach with the provided id
	 * @param {number} id - coach id
	 * @returns coach that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a coach with the provided data
	 * @param {*} data - coach data
	 * @returns coach created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the coach with the provided id
	 * @param {number} id - coach id
	 * @param {*} changes - coach data to update
	 * @returns coach updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the coach with the provided id
	 * @param {number} id - coach id
	 * @returns coach deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = CoachesService;
