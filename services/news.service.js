const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class NewsService {
	constructor() {}

	/**
	 * Finds all news in the object array
	 * @returns all the news in the array
	 */
	async find() {
		return [];
	}

	/**
	 * Finds the news with the provided id
	 * @param {number} id - news id
	 * @returns news that matches the id
	 */
	async findOne(id) {
		return { id };
	}

	/**
	 * Creates a news with the provided data
	 * @param {*} data - news data
	 * @returns news created
	 */
	async create(data) {
		return data;
	}

	/**
	 * Updates partially the news with the provided id
	 * @param {number} id - news id
	 * @param {*} changes - news data to update
	 * @returns news updated
	 */
	async update(id, changes) {
		return { id, changes };
	}

	/**
	 * Deletes the news with the provided id
	 * @param {number} id - news id
	 * @returns news deleted
	 */
	async delete(id) {
		return { id };
	}
}

module.exports = NewsService;
