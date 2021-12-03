const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const name = Joi.string().max(100);
const position = Joi.string().max(100);
const image = Joi.string().uri();

const getPlayerSchema = Joi.object({
	id: id.required(),
});

const createPlayerSchema = Joi.object({
	name: name.required(),
	position: position,
	image: image,
});

const updatePlayerSchema = Joi.object({
	name: name,
	position: position,
	image: image,
});

module.exports = { getPlayerSchema, createPlayerSchema, updatePlayerSchema };
