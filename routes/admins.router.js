const express = require('express');
const AdminsService = require('../services/admins.service');

const router = express.Router();
const service = new AdminsService();
const validationHandler = require('../middlewares/validator.handler');
const {
	getAdminSchema,
	createAdminSchema,
	updateAdminSchema,
} = require('../schemas/admin.schema');

/**
 * Admins main route
 * Shows all Admins
 */
router.get('/', async (req, res, next) => {
	try {
		const admins = await service.find();

		res.status(200).json(admins);
	} catch (error) {
		next(error);
	}
});

/**
 * Individual Admin route
 * Shows the Admin with the provided id
 */
router.get(
	'/:id',
	validationHandler(getAdminSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const admin = await service.findOne(id);

			res.status(200).json(admin);
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Add Admin route
 * Creates an Admin with the provided data in body
 */
router.post(
	'/',
	validationHandler(createAdminSchema, 'body'),
	async (req, res) => {
		const body = req.body;
		const newAdmin = await service.create(body);

		res.status(201).json({
			newAdmin,
			message: 'admin creado',
		});
	}
);

/**
 * Edit Admin route
 * Updates partial or entire data of the Admin with the provided id
 */
router.patch(
	'/:id',
	validationHandler(getAdminSchema, 'params'),
	validationHandler(updateAdminSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const admin = await service.update(id, body);

			res.status(200).json({
				admin,
				message: 'admin actualizado',
			});
		} catch (error) {
			next(error);
		}
	}
);

/**
 * Delete Admin route
 * Deletes the Admin with the provided id
 */
router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const admin = await service.delete(id);

		res.status(200).json({
			admin,
			message: 'admin eliminado',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
