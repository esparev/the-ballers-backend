const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const name = Joi.string().max(100);
const responsable = Joi.string().max(100);
const phone = Joi.string().max(10);
const ageStart = Joi.number().integer().max(60);
const ageEnd = Joi.number().integer().max(60);
const logo = Joi.string().uri();

const getLeagueSchema = Joi.object({
	id: id.required(),
});

const createLeagueSchema = Joi.object({
	name: name.required(),
	responsable: responsable,
	phone: phone,
	ageStart: ageStart.required(),
	ageEnd: ageEnd.required(),
	logo: logo,
});

const updateLeagueSchema = Joi.object({
	name: name,
	responsable: responsable,
	phone: phone,
	ageStart: ageStart,
	ageEnd: ageEnd,
	logo: logo,
});

module.exports = { getLeagueSchema, createLeagueSchema, updateLeagueSchema };
