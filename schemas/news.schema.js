const Joi = require('joi');

// Data rules
const id = Joi.number().integer();
const title = Joi.string().max(255);
const description = Joi.string().max(1000);
const createdAt = Joi.date();
const author = Joi.string().max(100);
const cover = Joi.string().uri();

const getNewsSchema = Joi.object({
	id: id.required(),
});

const createNewsSchema = Joi.object({
	title: title.required(),
	description: description.required(),
	createdAt,
	author,
	cover,
});

const updateNewsSchema = Joi.object({
	title,
	description,
	createdAt,
	author,
	cover,
});

module.exports = { getNewsSchema, createNewsSchema, updateNewsSchema };
