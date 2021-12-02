const faker = require('faker/locale/es_MX');

/**
 * Service layer with CRUD methods
 */
class NewsService {
	constructor() {
		this.news = [];
		this.generate();
	}

	/**
	 * Generates random news
	 */
	generate() {
		const limit = 10;

		for (let i = 0; i < limit; i++) {
			this.news.push({
				id: faker.datatype.uuid(),
				title: faker.name.title(),
				description: faker.lorem.paragraph(),
			});
		}
	}

	/**
	 * Finds all news in the object array
	 * @returns all the news in the array
	 */
	async find() {
		return this.news;
	}

	/**
	 * Finds the news with the provided id
	 * @param {*} id news id
	 * @returns news that matches the id
	 */
	async findOne(id) {
		return this.news.find((item) => item.id === id);
	}

	/**
	 * Creates a news with the provided data
	 * @param {*} data news data
	 * @returns news created
	 */
	async create(data) {
		const newNews = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.news.push(newNews);
		return newNews;
	}

	/**
	 * Updates partially the news with the provided id
	 * @param {*} id news id
	 * @param {*} changes news data to update
	 * @returns news updated
	 */
	async update(id, changes) {
		const index = this.news.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('noticia no encontrada');
		}
		const oneNews = this.news[index];
		this.news[index] = {
			...oneNews,
			...changes,
		};
		return this.news[index];
	}

	/**
	 * Deletes the news with the provided id
	 * @param {*} id news id
	 * @returns news deleted
	 */
	async delete(id) {
		const index = this.news.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('noticia no encontrada');
		}
		this.news.splice(index, 1);
		return { id };
	}
}

module.exports = NewsService;
