const Joi = require('joi');
const {
	createAddressSchema,
	updateAddressSchema,
} = require('./address.schema');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const name = Joi.string().min(1).max(255);
const responsable = Joi.string().min(1).max(255);
const phone = Joi.string().max(10);
const ageStart = Joi.number().integer().max(60);
const ageEnd = Joi.number().integer().max(60);
const logo = Joi.string().uri();

const getLeagueSchema = Joi.object({
	slug: slug.required(),
});

const createLeagueSchema = Joi.object({
	slug: slug.required(),
	name: name.required(),
	responsable,
	phone,
	ageStart: ageStart.required(),
	ageEnd: ageEnd.required(),
	logo,
	address: createAddressSchema,
});

const updateLeagueSchema = Joi.object({
	slug,
	name,
	responsable,
	phone,
	ageStart,
	ageEnd,
	logo,
	address: updateAddressSchema,
});

module.exports = { getLeagueSchema, createLeagueSchema, updateLeagueSchema };
