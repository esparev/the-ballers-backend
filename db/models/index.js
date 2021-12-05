const { Admin, AdminSchema } = require('./admin.model');

/**
 * Configures all the models to follow the rules of
 * each belonging schema
 * @param {*} sequelize - sequelize connection
 */
function setupModels(sequelize) {
	Admin.init(AdminSchema, Admin.config(sequelize));
}

module.exports = setupModels;
