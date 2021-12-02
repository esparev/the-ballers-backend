class TournamentsService {
	constructor() {
		this.tournaments = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.tournaments.push({
				id: `${i}`,
				title: `Torneo ${i}`,
				date: '26, octubre, 2021',
			});
		}
	}

	find() {
		return this.tournaments;
	}

	findOne(id) {
		return this.tournaments.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = TournamentsService;
