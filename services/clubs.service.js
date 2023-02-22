const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Service layer with CRUD methods
 */
class ClubsService {
	constructor() {}

	/**
	 * Finds all clubs in the database
	 * @returns all the clubs in the database
	 */
	async find() {
		const clubs = await models.Club.findAll({
			include: ['address'],
		});
		return clubs;
	}

	/**
	 * Finds the club with the provided id
	 * @param {number} id - club id
	 * @returns club that matches the id
	 */
	async findOne(id) {
		const club = await models.Club.findByPk(id, {
			include: ['team', 'address'],
		});
		if (!club) {
			throw boom.notFound('club not found');
		}
		return club;
	}

	/**
	 * Finds the club with the provided slug
	 * @param {string} slug - club slug
	 * @returns {Object} - club that matches the slug
	 */
	async findBySlug(slug) {
		const club = await models.Club.findOne({
			where: { slug },
			include: ['team', 'address'],
		});
		if (!club) {
			throw boom.notFound('club not found');
		}
		return club;
	}

	/**
	 * Creates a club with the provided data
	 * @param {*} data - club data
	 * @returns club created
	 */
	async create(data) {
		const newclub = await models.Club.create(data, {
			include: ['address'],
		});
		return newclub;
	}

	/**
	 * Updates partially the club with the provided slug
	 * @param {number} slug - club slug
	 * @param {*} changes - club data to update
	 * @returns club updated
	 */
	async update(slug, changes) {
		const club = await this.findBySlug(slug);
		const response = await club.update(changes);
		return response;
	}

	/**
	 * Deletes the club with the provided slug
	 * @param {number} slug - club slug
	 * @returns club deleted
	 */
	async delete(slug) {
		const club = await this.findBySlug(slug);
		await club.destroy();
		return { slug };
	}
}

module.exports = ClubsService;
