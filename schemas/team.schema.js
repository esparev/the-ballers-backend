const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const name = Joi.string().max(100);
const manager = Joi.string().max(100);
const logo = Joi.string().uri();

const getTeamSchema = Joi.object({
	id: id.required(),
});

const createTeamSchema = Joi.object({
	name: name.required(),
	manager: manager.required(),
	logo: logo,
});

const updateTeamSchema = Joi.object({
	name: name,
	manager: manager,
	logo: logo,
});

module.exports = { getTeamSchema, createTeamSchema, updateTeamSchema };
