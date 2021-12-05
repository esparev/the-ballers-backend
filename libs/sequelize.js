const { config } = require('../config/config');
const { Sequelize } = require('sequelize');

// Encoding delicate data
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// Unique URL connection to the postgres database
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
	dialect: 'postgres',
	logging: console.log,
});

module.exports = sequelize;
