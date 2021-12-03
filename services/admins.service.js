const faker = require('faker/locale/es_MX');
const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class AdminsService {
	constructor() {
		this.admins = [
			{
				id: '0',
				name: 'Esparev',
				email: 'esparev@hotmail.com',
				password: 'invisible',
				isHero: true,
			},
		];
		this.generate();
	}

	/**
	 * Generates random admins
	 */
	generate() {
		const limit = 5;

		for (let i = 1; i < limit; i++) {
			this.admins.push({
				id: `${i}`,
				isHero: false,
				name: `${faker.name.firstName()} ${faker.name.lastName()}`,
				email: faker.internet.email(),
				password: faker.internet.password(),
				image: faker.image.imageUrl(),
			});
		}
	}

	/**
	 * Finds all admins in the object array
	 * @returns all the admins in the array
	 */
	async find() {
		const admins = this.admins;

		if (!admins) {
			throw boom.notFound('no hay admins');
		}

		return admins;
	}

	/**
	 * Finds the admin with the provided id
	 * @param {*} id admin id
	 * @returns admin that matches the id
	 */
	async findOne(id) {
		const admin = this.admins.find((item) => item.id === id);

		if (!admin) {
			throw boom.notFound('admin no encontrado');
		}
		if (admin.isHero) {
			throw boom.forbidden('no puedes ver a este admin');
		}

		return admin;
	}

	/**
	 * Creates an admin with the provided data
	 * @param {*} data admin data
	 * @returns admin created
	 */
	async create(data) {
		const newAdmin = {
			id: `${this.admins.length}`,
			isHero: false,
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
		const admin = this.admins[index];

		if (index === -1) {
			throw boom.notFound('admin no encontrado');
		}
		if (admin.isHero) {
			throw boom.forbidden('no puedes editar a este admin');
		}

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
			throw boom.notFound('admin no encontrado');
		}
		if (this.admins[index].isHero) {
			throw boom.forbidden('no puedes eliminar a este admin');
		}

		this.admins.splice(index, 1);
		return { id };
	}
}

module.exports = AdminsService;
