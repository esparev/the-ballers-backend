const faker = require('faker/locale/es_MX');
const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class LeaguesService {
	constructor() {
		this.leagues = [];
		this.generate();
	}

	/**
	 * Generates random leagues
	 */
	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.leagues.push({
				id: faker.datatype.uuid(),
				name: faker.name.firstName(),
				responsable: `${faker.name.firstName()} ${faker.name.lastName()}`,
				phone: faker.phone.phoneNumber(),
				location: faker.address.county(),
				address: faker.address.streetAddress(),
				ageStart: faker.datatype.number(60),
				ageEnd: faker.datatype.number(60),
			});
		}
	}

	/**
	 * Finds all leagues in the object array
	 * @returns all the leagues in the array
	 */
	async find() {
		const leagues = this.leagues;

		if (!leagues) {
			throw boom.notFound('no hay jugadores');
		}

		return leagues;
	}

	/**
	 * Finds the league with the provided id
	 * @param {*} id league id
	 * @returns league that matches the id
	 */
	async findOne(id) {
		const league = this.leagues.find((item) => item.id === id);

		if (!league) {
			throw boom.notFound('liga no encontrada');
		}

		return league;
	}

	/**
	 * Creates a league with the provided data
	 * @param {*} data league data
	 * @returns league created
	 */
	async create(data) {
		const newLeague = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.leagues.push(newLeague);
		return newLeague;
	}

	/**
	 * Updates partially the league with the provided id
	 * @param {*} id league id
	 * @param {*} changes league data to update
	 * @returns league updated
	 */
	async update(id, changes) {
		const index = this.leagues.findIndex((item) => item.id === id);
		const league = this.leagues[index];

		if (index === -1) {
			throw boom.notFound('liga no encontrada');
		}

		this.leagues[index] = {
			...league,
			...changes,
		};
		return this.leagues[index];
	}

	/**
	 * Deletes the league with the provided id
	 * @param {*} id league id
	 * @returns league deleted
	 */
	async delete(id) {
		const index = this.leagues.findIndex((item) => item.id === id);

		if (index === -1) {
			throw boom.notFound('liga no encontrada');
		}

		this.leagues.splice(index, 1);
		return { id };
	}
}

module.exports = LeaguesService;
