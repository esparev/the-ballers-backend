require('dotenv').config();

/**
 * @description description of each environment variable
 * @typedef {Object} field definition
 * @property {*} env - define environment type production || dev
 * @property {*} isProd - verify environment type production
 * @property {*} port - server port
 * @property {*} dbUrl - database url
 * @property {*} apiKey - api key token
 * @property {*} jwtSecret - jsonwebtoken secret
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3000,
	dbUrl: process.env.DATABASE_URL,
	apiKey: process.env.API_KEY,
	jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
