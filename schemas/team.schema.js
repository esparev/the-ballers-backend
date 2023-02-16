const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const name = Joi.string().max(100);
const manager = Joi.string().max(100);
const logo = Joi.string().uri();
const clubId = Joi.number().integer();

const getTeamSchema = Joi.object({
	slug: slug.required(),
});

const createTeamSchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
	manager,
	logo,
	clubId: clubId.required(),
});

const updateTeamSchema = Joi.object({
	slug,
	name,
	manager,
	logo,
	clubId,
});

module.exports = { getTeamSchema, createTeamSchema, updateTeamSchema };
