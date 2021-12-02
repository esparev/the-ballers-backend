const faker = require('faker/locale/es_MX');

/**
 * Service layer with CRUD methods
 */
class CoachesService {
	constructor() {
		this.coaches = [];
		this.generate();
	}

	/**
	 * Generates random coaches
	 */
	generate() {
		const limit = 3;

		for (let i = 0; i < limit; i++) {
			this.coaches.push({
				id: faker.datatype.uuid(),
				name: `${faker.name.firstName()} ${faker.name.lastName()}`,
				birthday: faker.time.recent(),
			});
		}
	}

	/**
	 * Finds all coaches in the object array
	 * @returns all the coaches in the array
	 */
	async find() {
		return this.coaches;
	}

	/**
	 * Finds the coach with the provided id
	 * @param {*} id coach id
	 * @returns coach that matches the id
	 */
	async findOne(id) {
		return this.coaches.find((item) => item.id === id);
	}

	/**
	 * Creates a coach with the provided data
	 * @param {*} data coach data
	 * @returns coach created
	 */
	async create(data) {
		const newCoach = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.coaches.push(newCoach);
		return newCoach;
	}

	/**
	 * Updates partially the coach with the provided id
	 * @param {*} id coach id
	 * @param {*} changes coach data to update
	 * @returns coach updated
	 */
	async update(id, changes) {
		const index = this.coaches.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('entrenador no encontrado');
		}
		const coach = this.coaches[index];
		this.coaches[index] = {
			...coach,
			...changes,
		};
		return this.coaches[index];
	}

	/**
	 * Deletes the coach with the provided id
	 * @param {*} id coach id
	 * @returns coach deleted
	 */
	async delete(id) {
		const index = this.coaches.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('entrenador no encontrado');
		}
		this.coaches.splice(index, 1);
		return { id };
	}
}

module.exports = CoachesService;
