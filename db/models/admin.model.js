const { Model, DataTypes, Sequelize } = require('sequelize');

// Database table name
const ADMIN_TABLE = 'admin';

/**
 * Schema model to create in the db
 * @description description of each field in the table
 * @typedef {Object} field definition
 * @property {boolean} allowNull - false = NOT NULL
 * @property {boolean} autoIncrement - each insert, increase the counter
 * @property {boolean} primaryKey - define is primary key
 * @property {*} defaultValue - default value of the field
 * @property {boolean} type - expresion to match SQL type
 * @property {boolean} unique - define as unique the field
 * @property {boolean} field - rename the field
 */
const AdminSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	isHero: {
		allowNull: false,
		field: 'is_hero',
		defaultValue: false,
		type: DataTypes.BOOLEAN,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING(100),
	},
	email: {
		allowNull: false,
		unique: true,
		type: DataTypes.STRING(100),
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	image: {
		allowNull: true,
		type: DataTypes.STRING,
	},
};

/**
 * Model class
 */
class Admin extends Model {
	/**
	 * @param {*} sequelize - ORM connection type
	 * @property {any} sequelize - ORM connection type
	 * @property {string} tableName - define table name
	 * @property {string} modelName - define model name same as class name
	 * @returns the configuration of the model
	 */
	static config(sequelize) {
		return {
			sequelize,
			tableName: ADMIN_TABLE,
			modelName: 'Admin',
			timestamps: false,
		};
	}
}

module.exports = { ADMIN_TABLE, AdminSchema, Admin };
