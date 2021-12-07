const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const AdminsService = require('../../../services/admins.service');
const service = new AdminsService();

/**
 * Local strategy with various validations to protect
 * the account of the admin, from validating the existence
 * of an email to the comparison of the provided password
 * with the stored password
 */
const LocalStrategy = new Strategy(
	{
		usernameField: 'email',
		passwordField: 'password',
	},
	async (email, password, done) => {
		try {
			// Validates if an admin with the provided email exists
			const admin = await service.findByEmail(email);
			if (!admin) {
				done(boom.unauthorized(), false);
			}
			// Validates if the entered password matches the password stored in the database
			const isMatch = await bcrypt.compare(password, admin.password);
			if (!isMatch) {
				done(boom.unauthorized(), false);
			}
			// Remove password from return response
			delete admin.dataValues.password;
			// Successful validation
			done(null, admin);
		} catch (error) {
			done(error, false);
		}
	}
);

module.exports = LocalStrategy;
