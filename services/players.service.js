const faker = require('faker/locale/es_MX');
const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class PlayersService {
	constructor() {
		this.players = [];
		this.generate();
	}

	/**
	 * Generates random players
	 */
	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.players.push({
				id: faker.datatype.uuid(),
				name: `${faker.name.firstName()} ${faker.name.lastName()}`,
				birthday: faker.time.recent(),
			});
		}
	}

	/**
	 * Finds all players in the object array
	 * @returns all the players in the array
	 */
	async find() {
		const players = this.players;

		if (!players) {
			throw boom.notFound('no hay jugadores');
		}

		return players;
	}

	/**
	 * Finds the player with the provided id
	 * @param {*} id player id
	 * @returns player that matches the id
	 */
	async findOne(id) {
		const player = this.players.find((item) => item.id === id);

		if (!player) {
			throw boom.notFound('jugador no encontrado');
		}

		return player;
	}

	/**
	 * Creates a player with the provided data
	 * @param {*} data player data
	 * @returns player created
	 */
	async create(data) {
		const newPlayer = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.players.push(newPlayer);
		return newPlayer;
	}

	/**
	 * Updates partially the player with the provided id
	 * @param {*} id player id
	 * @param {*} changes player data to update
	 * @returns player updated
	 */
	async update(id, changes) {
		const index = this.players.findIndex((item) => item.id === id);
		const player = this.players[index];

		if (index === -1) {
			throw boom.notFound('jugador no encontrado');
		}

		this.players[index] = {
			...player,
			...changes,
		};
		return this.players[index];
	}

	/**
	 * Deletes the player with the provided id
	 * @param {*} id player id
	 * @returns player deleted
	 */
	async delete(id) {
		const index = this.players.findIndex((item) => item.id === id);

		if (index === -1) {
			throw boom.notFound('jugador no encontrado');
		}

		this.players.splice(index, 1);
		return { id };
	}
}

module.exports = PlayersService;
