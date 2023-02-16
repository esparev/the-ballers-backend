const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

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
		const players = await models.Player.findAll({
			include: ['team'],
		});
		return players;
	}

	/**
	 * Finds the player with the provided id
	 * @param {number} id - player id
	 * @returns player that matches the id
	 */
	async findOne(id) {
		const player = await models.Player.findByPk(id);
		if (!player) {
			throw boom.notFound('player not found');
		}
		return player;
	}

	/**
	 * Finds the player with the provided slug
	 * @param {string} slug - player slug
	 * @returns {Object} - player that matches the slug
	 */
	async findBySlug(slug) {
		const player = await models.Player.findOne({
			where: { slug },
		});
		if (!player) {
			throw boom.notFound('player not found');
		}
		return player;
	}

	/**
	 * Creates a player with the provided data
	 * @param {*} data - player data
	 * @returns player created
	 */
	async create(data) {
		const newPlayer = await models.Player.create(data);
		return newPlayer;
	}

	/**
	 * Updates partially the player with the provided slug
	 * @param {number} slug - player slug
	 * @param {*} changes - player data to update
	 * @returns player updated
	 */
	async update(slug, changes) {
		const player = await this.findBySlug(slug);
		const response = await player.update(changes);
		return response;
	}

	/**
	 * Deletes the player with the provided slug
	 * @param {number} slug - player slug
	 * @returns player deleted
	 */
	async delete(slug) {
		const player = await this.findBySlug(slug);
		await player.destroy();
		return { slug };
	}
}

module.exports = PlayersService;
