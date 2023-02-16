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
		const leagues = await models.League.findAll({
			include: ['address'],
		});
		return leagues;
	}

	/**
	 * Finds the league with the provided id
	 * @param {number} id - league id
	 * @returns league that matches the id
	 */
	async findOne(id) {
		const league = await models.League.findByPk(id, {
			include: ['team'],
		});
		if (!league) {
			throw boom.notFound('league not found');
		}
		return league;
	}

	/**
	 * Finds the league with the provided slug
	 * @param {string} slug - league slug
	 * @returns {Object} - league that matches the slug
	 */
	async findBySlug(slug) {
		const league = await models.League.findOne({
			where: { slug },
			include: ['team'],
		});
		if (!league) {
			throw boom.notFound('league not found');
		}
		return league;
	}

	/**
	 * Creates a league with the provided data
	 * @param {*} data - league data
	 * @returns league created
	 */
	async create(data) {
		const newLeague = await models.League.create(data, {
			include: ['address'],
		});
		return newLeague;
	}

	/**
	 * Updates partially the league with the provided slug
	 * @param {number} slug - league slug
	 * @param {*} changes - league data to update
	 * @returns league updated
	 */
	async update(slug, changes) {
		const league = await this.findBySlug(slug);
		const response = await league.update(changes);
		return response;
	}

	/**
	 * Deletes the league with the provided slug
	 * @param {number} slug - league slug
	 * @returns league deleted
	 */
	async delete(slug) {
		const league = await this.findBySlug(slug);
		await league.destroy();
		return { slug };
	}
}

module.exports = LeaguesService;
