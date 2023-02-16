const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

/**
 * Service layer with CRUD methods
 */
class NewsService {
	constructor() {}

	/**
	 * Finds all news in the object array
	 * @returns all the news in the array
	 */
	async find(query) {
		const options = {
			order: [],
		};
		const { limit, offset } = query;
		if (limit && offset) {
			options.limit = limit;
			options.offset = offset;
		}
		const { sort } = query;
		if (sort) {
			options.order = [['created_at', sort]];
		}
		const news = await models.News.findAll(options);
		return news;
	}

	/**
	 * Finds the news with the provided id
	 * @param {number} id - news id
	 * @returns news that matches the id
	 */
	async findOne(id) {
		const news = await models.News.findByPk(id);
		if (!news) {
			throw boom.notFound('news not found');
		}
		return news;
	}

	/**
	 * Finds the news with the provided slug
	 * @param {string} slug - news slug
	 * @returns {Object} - news that matches the slug
	 */
	async findBySlug(slug) {
		const news = await models.News.findOne({
			where: { slug },
		});
		if (!news) {
			throw boom.notFound('news not found');
		}
		return news;
	}

	/**
	 * Creates a news with the provided data
	 * @param {*} data - news data
	 * @returns news created
	 */
	async create(data) {
		const newNews = await models.News.create(data);
		return newNews;
	}

	/**
	 * Updates partially the news with the provided slug
	 * @param {number} slug - news slug
	 * @param {*} changes - news data to update
	 * @returns news updated
	 */
	async update(slug, changes) {
		const news = await this.findBySlug(slug);
		const response = await news.update(changes);
		return response;
	}

	/**
	 * Deletes the news with the provided slug
	 * @param {number} slug - news slug
	 * @returns news deleted
	 */
	async delete(slug) {
		const news = await this.findBySlug(slug);
		await news.destroy();
		return { slug };
	}
}

module.exports = NewsService;
