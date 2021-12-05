const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Service layer with CRUD methods
 */
class AddressesService {
	constructor() {}

	/**
	 * Finds all addresses in the database
	 * @returns all the addresses in the database
	 */
	async find() {
		const response = await models.Address.findAll();
		return response;
	}

	/**
	 * Finds the address with the provided id
	 * @param {number} id - address id
	 * @returns address that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a address with the provided data
	 * @param {*} data - address data
	 * @returns address created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the address with the provided id
	 * @param {number} id - address id
	 * @param {*} changes - address data to update
	 * @returns address updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the address with the provided id
	 * @param {number} id - address id
	 * @returns address deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = AddressesService;
