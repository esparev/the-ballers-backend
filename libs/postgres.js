const { config } = require('../config/config');
const { Client } = require('pg');

// Encoding delicate data
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Unique URL connection to the postgres database
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

/**
 * Connects to the provided URL connection with it's credentials
 */
async function getConnection() {
	const client = new Client({ connectionString: URI });
	await client.connect();
	return client;
}

module.exports = getConnection;
