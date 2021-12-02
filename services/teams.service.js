const faker = require('faker/locale/es_MX');

/**
 * Service layer with CRUD methods
 */
class TeamsService {
	constructor() {
		this.teams = [];
		this.generate();
	}

	/**
	 * Generates random teams
	 */
	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.teams.push({
				id: faker.datatype.uuid(),
				name: faker.name.firstName(),
				manager: `${faker.name.firstName()} ${faker.name.lastName()}`,
			});
		}
	}

	/**
	 * Finds all teams in the object array
	 * @returns all the teams in the array
	 */
	find() {
		return this.teams;
	}

	/**
	 * Finds the team with the provided id
	 * @param {*} id team id
	 * @returns team that matches the id
	 */
	findOne(id) {
		return this.teams.find((item) => item.id === id);
	}

	/**
	 * Creates a team with the provided data
	 * @param {*} data team data
	 * @returns team created
	 */
	create(data) {
		const newTeam = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.teams.push(newTeam);
		return newTeam;
	}

	/**
	 * Updates partially the team with the provided id
	 * @param {*} id team id
	 * @param {*} changes team data to update
	 * @returns team updated
	 */
	update(id, changes) {
		const index = this.teams.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('equipo no encontrado');
		}
		const team = this.teams[index];
		this.teams[index] = {
			...team,
			...changes,
		};
		return this.teams[index];
	}

	/**
	 * Deletes the team with the provided id
	 * @param {*} id team id
	 * @returns team deleted
	 */
	delete(id) {
		const index = this.teams.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('equipo no encontrado');
		}
		this.teams.splice(index, 1);
		return { id };
	}
}

module.exports = TeamsService;
