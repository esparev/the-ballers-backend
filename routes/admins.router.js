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
	res.status(201).json({
		data: body,
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
	res.status(200).json({
		id,
		data: body,
		message: 'admin actualizado',
	});
});

// Delete admin route
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		message: 'admin eliminado',
	});
});

module.exports = router;
