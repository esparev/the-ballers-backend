const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const title = Joi.string().alphanum().max(255);
const link = Joi.string().uri();
const cover = Joi.string().uri();

const getTournamentSchema = Joi.object({
	id: id.required(),
});

const createTournamentSchema = Joi.object({
	title: title.required(),
	link: link.required(),
	cover: cover,
});

const updateTournamentSchema = Joi.object({
	title: title,
	link: link,
	cover: cover,
});

module.exports = {
	getTournamentSchema,
	createTournamentSchema,
	updateTournamentSchema,
};
