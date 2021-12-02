class NewsService {
	constructor() {
		this.news = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.news.push({
				id: `${i}`,
				title: `Noticia ${i}`,
				date: '26, octubre, 2021',
			});
		}
	}

	find() {
		return this.news;
	}

	findOne(id) {
		return this.news.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = NewsService;
