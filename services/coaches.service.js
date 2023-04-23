const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

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
		const coaches = await models.Coach.findAll({
			include: ['team'],
		});
		return coaches;
	}

	/**
	 * Finds the coach with the provided id
	 * @param {number} id - coach id
	 * @returns coach that matches the id
	 */
	async findOne(id) {
		const coach = await models.Coach.findByPk(id);
		if (!coach) {
			throw boom.notFound('coach not found');
		}
		return coach;
	}

	/**
	 * Finds the coach with the provided slug
	 * @param {string} slug - coach slug
	 * @returns {Object} - coach that matches the slug
	 */
	async findBySlug(slug) {
		const coach = await models.Coach.findOne({
			where: { slug },
			include: ['team'],
		});
		if (!coach) {
			throw boom.notFound('coach not found');
		}
		return coach;
	}

	/**
	 * Creates a coach with the provided data
	 * @param {*} data - coach data
	 * @returns coach created
	 */
	async create(data) {
		const newCoach = await models.Coach.create(data);
		return newCoach;
	}

	/**
	 * Updates partially the coach with the provided slug
	 * @param {number} slug - coach slug
	 * @param {*} changes - coach data to update
	 * @returns coach updated
	 */
	async update(slug, changes) {
		const coach = await this.findBySlug(slug);
		const response = await coach.update(changes);
		return response;
	}

	/**
	 * Deletes the coach with the provided slug
	 * @param {number} slug - coach slug
	 * @returns coach deleted
	 */
	async delete(slug) {
		const coach = await this.findBySlug(slug);
		await coach.destroy();
		return { slug };
	}
}

module.exports = CoachesService;
