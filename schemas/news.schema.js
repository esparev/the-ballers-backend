const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const slug = Joi.string().min(1).max(255);
const title = Joi.string().max(255);
const description = Joi.string().max(1000);
const createdAt = Joi.date();
const author = Joi.string().max(100);
const cover = Joi.string().uri();
// Query params
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const sort = Joi.string();

const getNewsSchema = Joi.object({
	slug: slug.required(),
});

const createNewsSchema = Joi.object({
	slug: slug.required(),
	title: title.required(),
	description: description.required(),
	createdAt,
	author,
	cover,
});

const updateNewsSchema = Joi.object({
	slug,
	title,
	description,
	createdAt,
	author,
	cover,
});

const queryNewsSchema = Joi.object({
	limit,
	offset,
	sort,
});

module.exports = {
	getNewsSchema,
	createNewsSchema,
	updateNewsSchema,
	queryNewsSchema,
};
