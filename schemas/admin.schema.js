const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const isHero = Joi.boolean();
const name = Joi.string().max(100);
const email = Joi.string().email();
const password = Joi.string();
const image = Joi.string().uri();

const getAdminSchema = Joi.object({
	id: id.required(),
});

const createAdminSchema = Joi.object({
	isHero: isHero.required(),
	name: name.required(),
	email: email.required(),
	password: password.required(),
	image: image,
});

const updateAdminSchema = Joi.object({
	name: name,
	email: email,
	password: password,
	image: image,
});

module.exports = { getAdminSchema, createAdminSchema, updateAdminSchema };
