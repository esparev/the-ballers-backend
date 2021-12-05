const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Service layer with CRUD methods
 */
class LeaguesService {
	constructor() {}

	/**
	 * Finds all leagues in the database
	 * @returns all the leagues in the database
	 */
	async find() {
		const response = await models.League.findAll();
		return response;
	}

	/**
	 * Finds the league with the provided id
	 * @param {number} id - league id
	 * @returns league that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a league with the provided data
	 * @param {*} data - league data
	 * @returns league created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the league with the provided id
	 * @param {number} id - league id
	 * @param {*} changes - league data to update
	 * @returns league updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the league with the provided id
	 * @param {number} id - league id
	 * @returns league deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = LeaguesService;
