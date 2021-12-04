const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

/**
 * Service layer with CRUD methods
 */
class AdminsService {
	constructor() {
		this.pool = pool;
		// Listen pool connection in case of an error
		this.pool.on('error', (err) => console.log(err));
	}

	/**
	 * Finds all admins in the object array
	 * @returns all the admins in the array
	 */
	async find() {
		const query = 'SELECT * FROM admin';
		const response = await this.pool.query(query);
		return response.rows;
	}

	/**
	 * Finds the admin with the provided id
	 * @param {*} id admin id
	 * @returns admin that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates an admin with the provided data
	 * @param {*} data admin data
	 * @returns admin created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the admin with the provided id
	 * @param {*} id admin id
	 * @param {*} changes admin data to update
	 * @returns admin updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the admin with the provided id
	 * @param {*} id admin id
	 * @returns admin deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = AdminsService;
