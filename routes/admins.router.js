const express = require('express');
const AdminsService = require('../services/admins.service');

const router = express.Router({ mergeParams: true });
const service = new AdminsService();

// Admins main route
router.get('/', async (req, res) => {
	const admins = await service.find();

	res.status(200).json(admins);
});

// Add admin route
router.post('/', async (req, res) => {
	const body = req.body;
	const newAdmin = await service.create(body);

	res.status(201).json({
		newAdmin,
		message: 'admin creado',
	});
});

// Individual admin route
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const admin = await service.findOne(id);

	res.status(200).json(admin);
});

// Edit admin route
router.patch('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { body } = req.body;
		const admin = await service.update(id, body);

		res.status(200).json({
			admin,
			message: 'admin actualizado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

// Delete admin route
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const admin = await service.delete(id);

		res.status(200).json({
			admin,
			message: 'admin eliminado',
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
});

module.exports = router;
