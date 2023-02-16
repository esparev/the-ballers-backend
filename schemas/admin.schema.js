const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const role = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const email = Joi.string().email().min(1).max(255);
const password = Joi.string().min(1).max(255);
const image = Joi.string().uri();

const getAdminSchema = Joi.object({
	slug: slug.required(),
});

const createAdminSchema = Joi.object({
	slug: slug.required(),
	role,
	name: name.required(),
	email: email.required(),
	password: password.required(),
	image,
});

const updateAdminSchema = Joi.object({
	slug,
	name,
	email,
	password,
	image,
});

module.exports = { getAdminSchema, createAdminSchema, updateAdminSchema };
