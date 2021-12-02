class CoachesService {
	constructor() {
		this.coaches = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.coaches.push({
				id: `${i}`,
				name: `Entrenador ${i}`,
			});
		}
	}

	find() {
		return this.coaches;
	}

	findOne(id) {
		return this.coaches.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = CoachesService;
