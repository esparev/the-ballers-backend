const faker = require('faker/locale/es_MX');

/**
 * Service layer with CRUD methods
 */
class AdminsService {
	constructor() {
		this.admins = [];
		this.generate();
	}

	/**
	 * Generates random admins
	 */
	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.admins.push({
				id: faker.datatype.uuid(),
				name: `${faker.name.firstName()} ${faker.name.lastName()}`,
				email: faker.internet.email(),
				password: faker.internet.password(),
			});
		}
	}

	/**
	 * Finds all admins in the object array
	 * @returns all the admins in the array
	 */
	async find() {
		return this.admins;
	}

	/**
	 * Finds the admin with the provided id
	 * @param {*} id admin id
	 * @returns admin that matches the id
	 */
	async findOne(id) {
		return this.admins.find((item) => item.id === id);
	}

	/**
	 * Creates an admin with the provided data
	 * @param {*} data admin data
	 * @returns admin created
	 */
	async create(data) {
		const newAdmin = {
			id: faker.datatype.uuid(),
			...data,
		};
		this.admins.push(newAdmin);
		return newAdmin;
	}

	/**
	 * Updates partially the admin with the provided id
	 * @param {*} id admin id
	 * @param {*} changes admin data to update
	 * @returns admin updated
	 */
	async update(id, changes) {
		const index = this.admins.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('admin no encontrado');
		}
		const admin = this.admins[index];
		this.admins[index] = {
			...admin,
			...changes,
		};
		return this.admins[index];
	}

	/**
	 * Deletes the admin with the provided id
	 * @param {*} id admin id
	 * @returns admin deleted
	 */
	async delete(id) {
		const index = this.admins.findIndex((item) => item.id === id);
		if (index === -1) {
			throw new Error('admin no encontrado');
		}
		this.admins.splice(index, 1);
		return { id };
	}
}

module.exports = AdminsService;
