const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class PlayersService {
	constructor() {}

	/**
	 * Finds all players in the database
	 * @returns all the players in the database
	 */
	async find() {
		return [];
	}

	/**
	 * Finds the player with the provided id
	 * @param {number} id - player id
	 * @returns player that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a player with the provided data
	 * @param {*} data - player data
	 * @returns player created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the player with the provided id
	 * @param {number} id - player id
	 * @param {*} changes - player data to update
	 * @returns player updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the player with the provided id
	 * @param {number} id - player id
	 * @returns player deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = PlayersService;
