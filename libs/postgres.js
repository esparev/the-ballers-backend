require('dotenv').config();
const { Client } = require('pg');

/**
 * Connects to the provided database with it's
 * credentials
 */
async function getConnection() {
	const client = new Client({
		host: 'localhost',
		port: 5432,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	});
	await client.connect();
	return client;
}

module.exports = getConnection;
