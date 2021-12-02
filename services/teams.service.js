class TeamsService {
	constructor() {
		this.teams = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.teams.push({
				id: `${i}`,
				name: `Equipo ${i}`,
			});
		}
	}

	find() {
		return this.teams;
	}

	findOne(id) {
		return this.teams.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = TeamsService;
