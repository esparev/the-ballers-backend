const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const AdminsService = require('./admins.service');
const service = new AdminsService();
const { config } = require('../config/config');

/**
 * Service layer with CRUD methods
 */
class AuthService {
	constructor() {}

	/**
	 * Finds the admin with the provided email and password
	 * Also validates the existence of a username to
	 * the comparison of the provided password with
	 * the stored password
	 * @param {number} email - admin email
	 * @param {number} password - admin password
	 * @returns admin that matches the email
	 */
	async getUser(email, password) {
		// Validates if an admin with the provided email exists
		const admin = await service.findByEmail(email);
		if (!admin) {
			throw boom.unauthorized();
		}
		// Validates if the entered password matches the password stored in the database
		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			throw boom.unauthorized();
		}
		// Remove password from return response
		delete admin.dataValues.password;
		return admin;
	}

	/**
	 * Signs a json web token with the necessary information
	 * about the admin to define its roles
	 * @param {*} admin - admin object
	 * @returns the admin and its token
	 */
	signToken(admin) {
		const payload = {
			// Subject to identify the admin
			sub: admin.id,
			// Permissions of the admin
			scope: admin.role,
		};
		const token = jwt.sign(payload, config.jwtSecret);
		return {
			admin,
			token,
		};
	}

	/**
	 * Sends and email to the provided email
	 * @param {*} email - admin email
	 * @returns message
	 */
	async sendMail(email) {
		// Validates if an admin with the provided email exists
		const admin = await service.findByEmail(email);
		if (!admin) {
			throw boom.unauthorized();
		}
		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			secure: true, // true for 465, false for other ports
			port: 465,
			auth: {
				user: 'jm.esparev@gmail.com',
				pass: config.emailPass,
			},
		});
		// send mail with defined transport object
		await transporter.sendMail({
			from: 'jm.esparev@gmail.com', // sender address
			to: `${admin.email}`, // list of receivers
			subject: 'Recuperar contraseña', // Subject line
			text: 'Link para recuperar tu contraseña', // plain text body
			html: '<b>Link para recuperar tu contraseña</b>', // html body
		});
		return { message: 'mail enviado' };
	}
}

module.exports = AuthService;
