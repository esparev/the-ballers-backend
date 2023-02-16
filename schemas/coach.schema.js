const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const birthday = Joi.string().isoDate();
const image = Joi.string().uri();
const teamId = Joi.number().integer();

const getCoachSchema = Joi.object({
	slug: slug.required(),
});

const createCoachSchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
	birthday: birthday,
	image,
	teamId: teamId.required(),
});

const updateCoachSchema = Joi.object({
	slug,
	name,
	birthday,
	image,
	teamId,
});

module.exports = { getCoachSchema, createCoachSchema, updateCoachSchema };
