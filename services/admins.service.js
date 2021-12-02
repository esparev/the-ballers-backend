class AdminsService {
	constructor() {
		this.admins = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.admins.push({
				id: `${i}`,
				name: `Admin ${i}`,
			});
		}
	}

	find() {
		return this.admins;
	}

	findOne(id) {
		return this.admins.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = AdminsService;
