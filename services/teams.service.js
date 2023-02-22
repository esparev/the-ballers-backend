const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

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
		const teams = await models.Team.findAll({
			include: ['club'],
		});
		return teams;
	}

	/**
	 * Finds the team with the provided id
	 * @param {number} id - team id
	 * @returns team that matches the id
	 */
	async findOne(id) {
		const team = await models.Team.findByPk(id, {
			include: ['player', 'coach'],
		});
		if (!team) {
			throw boom.notFound('team not found');
		}
		return team;
	}

	/**
	 * Finds the team with the provided slug
	 * @param {string} slug - team slug
	 * @returns {Object} - team that matches the slug
	 */
	async findBySlug(slug) {
		const team = await models.Team.findOne({
			where: { slug },
			include: ['player', 'coach'],
		});
		if (!team) {
			throw boom.notFound('team not found');
		}
		return team;
	}

	/**
	 * Creates a team with the provided data
	 * @param {*} data - team data
	 * @returns team created
	 */
	async create(data) {
		const newTeam = await models.Team.create(data);
		return newTeam;
	}

	/**
	 * Updates partially the team with the provided slug
	 * @param {number} slug - team slug
	 * @param {*} changes - team data to update
	 * @returns team updated
	 */
	async update(slug, changes) {
		const team = await this.findBySlug(slug);
		const response = await team.update(changes);
		return response;
	}

	/**
	 * Deletes the team with the provided slug
	 * @param {number} slug - team slug
	 * @returns team deleted
	 */
	async delete(slug) {
		const team = await this.findBySlug(slug);
		await team.destroy();
		return { slug };
	}
}

module.exports = TeamsService;
