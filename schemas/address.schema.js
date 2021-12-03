const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const street = Joi.string().max(100);
const number = Joi.number().integer();
const zipCode = Joi.number().integer();
const suburb = Joi.string().max(100);
const location = Joi.string().max(100);
const leagueId = Joi.number().integer();

const getAddressSchema = Joi.object({
	id: id.required(),
});

const createAddressSchema = Joi.object({
	street: street.required(),
	number: number.required(),
	zipCode: zipCode.required(),
	suburb: suburb.required(),
	location: location.required(),
	leagueId: leagueId.required(),
});

const updateAddressSchema = Joi.object({
	street: street,
	number: number,
	zipCode: zipCode,
	suburb: suburb,
	location: location,
	leagueId: leagueId,
});

module.exports = { getAddressSchema, createAddressSchema, updateAddressSchema };
