const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const title = Joi.string().max(255);
const link = Joi.string().uri();
const createdAt = Joi.date();
const author = Joi.string().max(100);
const cover = Joi.string().uri();
// Query params
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const sort = Joi.string();

const getTournamentSchema = Joi.object({
	slug: slug.required(),
});

const createTournamentSchema = Joi.object({
	slug: slug.required(),
	title: title.required(),
	link: link.required(),
	createdAt,
	author,
	cover,
});

const updateTournamentSchema = Joi.object({
	slug,
	title,
	link,
	createdAt,
	author,
	cover,
});

const queryTournamentSchema = Joi.object({
	limit,
	offset,
	sort,
});

module.exports = {
	getTournamentSchema,
	createTournamentSchema,
	updateTournamentSchema,
	queryTournamentSchema,
};
