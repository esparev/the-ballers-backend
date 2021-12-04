require('dotenv').config();
const { Pool } = require('pg');

/**
 * Connects to the provided database with it's
 * credentials only once to avoid unnecessary or
 * excessive request connection to the same database
 */
const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

module.exports = pool;
