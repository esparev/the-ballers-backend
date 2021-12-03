const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const name = Joi.string().max(100);
const birthday = Joi.string().isoDate();
const image = Joi.string().uri();

const getCoachSchema = Joi.object({
	id: id.required(),
});

const createCoachSchema = Joi.object({
	name: name.required(),
	birthday: birthday,
	image: image,
});

const updateCoachSchema = Joi.object({
	name: name,
	birthday: birthday,
	image: image,
});

module.exports = { getCoachSchema, createCoachSchema, updateCoachSchema };
