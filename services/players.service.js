class PlayersService {
	constructor() {
		this.players = [];
		this.generate();
	}

	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.players.push({
				id: `${i}`,
				name: `Jugador ${i}`,
			});
		}
	}

	find() {
		return this.players;
	}

	findOne(id) {
		return this.players.find((item) => item.id === id);
	}

	create() {}

	update() {}

	delete() {}
}

module.exports = PlayersService;
