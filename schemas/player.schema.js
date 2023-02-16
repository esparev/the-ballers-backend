const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const name = Joi.string().max(100);
const position = Joi.string().max(100);
const birthday = Joi.string().isoDate();
const image = Joi.string().uri();
const teamId = Joi.number().integer();

const getPlayerSchema = Joi.object({
	slug: slug.required(),
});

const createPlayerSchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
	position,
	birthday,
	image,
	teamId: teamId.required(),
});

const updatePlayerSchema = Joi.object({
	slug,
	name,
	position,
	birthday,
	image,
	teamId,
});

module.exports = { getPlayerSchema, createPlayerSchema, updatePlayerSchema };
