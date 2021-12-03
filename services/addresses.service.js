const faker = require('faker/locale/es_MX');
const boom = require('@hapi/boom');

/**
 * Service layer with CRUD methods
 */
class AddressesService {
	constructor() {
		this.addresses = [];
		this.generate();
	}

	/**
	 * Generates random addresses
	 */
	generate() {
		const limit = 5;

		for (let i = 0; i < limit; i++) {
			this.addresses.push({
				id: `${i}`,
				street: faker.address.streetName(),
				number: faker.datatype.number(),
				zipCode: faker.address.zipCode(),
				suburb: faker.address.streetName(),
				location: faker.address.city(),
			});
		}
	}

	/**
	 * Finds all addresses in the object array
	 * @returns all the addresses in the array
	 */
	async find() {
		const addresses = this.addresses;

		if (!addresses) {
			throw boom.notFound('no hay direcciones');
		}

		return addresses;
	}

	/**
	 * Finds the address with the provided id
	 * @param {*} id address id
	 * @returns address that matches the id
	 */
	async findOne(id) {
		const address = this.addresses.find((item) => item.id === id);

		if (!address) {
			throw boom.notFound('direccion no encontrada');
		}

		return address;
	}

	/**
	 * Creates a address with the provided data
	 * @param {*} data address data
	 * @returns address created
	 */
	async create(data) {
		const newAddress = {
			id: `${this.addresses.length}`,
			...data,
		};
		this.addresses.push(newAddress);
		return newAddress;
	}

	/**
	 * Updates partially the address with the provided id
	 * @param {*} id address id
	 * @param {*} changes address data to update
	 * @returns address updated
	 */
	async update(id, changes) {
		const index = this.addresses.findIndex((item) => item.id === id);
		const address = this.addresses[index];

		if (index === -1) {
			throw boom.notFound('direccion no encontrada');
		}

		this.addresses[index] = {
			...address,
			...changes,
		};
		return this.addresses[index];
	}

	/**
	 * Deletes the address with the provided id
	 * @param {*} id address id
	 * @returns address deleted
	 */
	async delete(id) {
		const index = this.addresses.findIndex((item) => item.id === id);

		if (index === -1) {
			throw boom.notFound('direccion no encontrada');
		}

		this.addresses.splice(index, 1);
		return { id };
	}
}

module.exports = AddressesService;
