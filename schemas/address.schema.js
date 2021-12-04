const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const streetName = Joi.string().max(100);
const streetNumber = Joi.string().max(10);
const zipCode = Joi.string().max(10);
const suburb = Joi.string().max(100);
const location = Joi.string().max(100);
const leagueId = Joi.number().integer();

const getAddressSchema = Joi.object({
	id: id.required(),
});

const createAddressSchema = Joi.object({
	streetName: streetName.required(),
	streetNumber: streetNumber.required(),
	zipCode: zipCode.required(),
	suburb: suburb.required(),
	location: location.required(),
	leagueId: leagueId.required(),
});

const updateAddressSchema = Joi.object({
	streetName: streetName,
	streetNumber: streetNumber,
	zipCode: zipCode,
	suburb: suburb,
	location: location,
	leagueId: leagueId,
});

module.exports = { getAddressSchema, createAddressSchema, updateAddressSchema };
