class LeaguesService {
	constructor() {
		this.leagues = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.leagues.push({
				id: `${i}`,
				name: `Liga ${i}`,
			});
		}
	}

	find() {
		return this.leagues;
	}

	findOne(id) {
		return this.leagues.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = LeaguesService;
