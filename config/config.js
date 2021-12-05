require('dotenv').config();

/**
 * @description description of each environment variable
 * @typedef {Object} field definition
 * @property {*} env - define environment type production || dev
 * @property {*} port - server port
 * @property {*} dbPort - database port
 * @property {*} dbHost - database host name
 * @property {*} dbName - database name
 * @property {*} dbUser - database user name
 * @property {*} dbPassword - database user password
 */
const config = {
	env: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	dbPort: process.env.DB_PORT,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
};

module.exports = { config };
