require('dotenv').config();

/**
 * @description description of each environment variable
 * @typedef {Object} field definition
 * @property {*} env - define environment type production || dev
 * @property {*} isProd - verify environment type production
 * @property {*} port - server port
 * @property {*} dbPort - database port
 * @property {*} dbHost - database host name
 * @property {*} dbName - database name
 * @property {*} dbUser - database user name
 * @property {*} dbPassword - database user password
 * @property {*} dbUrl - database url
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	isProd: process.env.NODE_ENV === 'production',
	port: process.env.PORT || 3000,
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
