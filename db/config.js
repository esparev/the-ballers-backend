// Configuration file for migration system files
const { config } = require('../config/config');

// Encoding delicate data
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Unique URL connection to the postgres database
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
	development: {
		url: URI,
		dialect: 'postgres',
	},
	production: {
		url: URI,
		dialect: 'postgres',
	},
};
