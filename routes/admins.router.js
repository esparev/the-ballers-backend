const express = require('express');
const AdminsService = require('../services/admins.service');

const router = express.Router({ mergeParams: true });
const service = new AdminsService();

// Admins main route
router.get('/', (req, res) => {
	const admins = service.find();

	res.status(200).json(admins);
});

// Add admin route
router.post('/', (req, res) => {
	const body = req.body;
	const newAdmin = service.create(body);

	res.status(201).json({
		newAdmin,
		message: 'admin creado',
	});
});

// Individual admin route
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const admin = service.findOne(id);

	res.status(200).json(admin);
});

// Edit admin route
router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const { body } = req.body;
	const admin = service.update(id, body);

	res.status(200).json({
		admin,
		message: 'admin actualizado',
	});
});

// Delete admin route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const admin = service.delete(id);

	res.status(200).json({
		admin,
		message: 'admin eliminado',
	});
});

module.exports = router;
