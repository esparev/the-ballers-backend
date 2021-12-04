const { config } = require('../config/config');
const { Pool } = require('pg');

// Encoding delicate data
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Unique URL connection to the postgres database
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

/**
 * Connects to the database provided within the url
 * only once to avoid unnecessary or excessive
 * request connection to the same database
 */
const pool = new Pool({ connectionString: URI });

module.exports = pool;
