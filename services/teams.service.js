const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class TeamsService {
	constructor() {}

	/**
	 * Finds all teams in the database
	 * @returns all the teams in the database
	 */
	async find() {
		return [];
	}

	/**
	 * Finds the team with the provided id
	 * @param {number} id - team id
	 * @returns team that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a team with the provided data
	 * @param {*} data - team data
	 * @returns team created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the team with the provided id
	 * @param {number} id - team id
	 * @param {*} changes - team data to update
	 * @returns team updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the team with the provided id
	 * @param {number} id - team id
	 * @returns team deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = TeamsService;
