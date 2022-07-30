const { response } = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { generarToken } = require('../helpers/jwt');

const getUsers = async (req, res = response) => {
	const outSet = Number(req.query.ouset) || 0;

	const [users, totalUser] = await Promise.all([User.find().skip(outSet).limit(5), User.count()]);
	res.json({
		ok: true,
		users,
		totalUser,
	});
};

const newUser = async (req, res = response) => {
	const { contraseña, correo, identificacion } = req.body;
	console.log(req.body);

	const emailExist = await User.findOne({ correo });
	if (emailExist) {
		return res.status(400).json({
			ok: false,
			msg: 'El correo ya existe',
		});
	}

	const identityExist = await User.findOne({ identificacion });
	if (identityExist) {
		return res.status(400).json({
			ok: false,
			msg: 'La identificacion ya existe',
		});
	}

	try {
		const userDB = new User(req.body);

		//encriptar contraseña
		const salt = bcrypt.genSaltSync();
		userDB.contraseña = bcrypt.hashSync(contraseña, salt);

		//Guardar usuario
		await userDB.save();

		const token = await generarToken(userDB.id);
		res.json({
			ok: true,
			token,
			name: userDB.nombre,
			apellido: userDB.apellido,
			uid: userDB.id,
			img: userDB.img[0],
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

const updateUser = async (req, res = response) => {
	const uid = req.params.id;

	try {
		const userDB = await User.findById(uid);
		if (!userDB) {
			return res.status(404).json({
				ok: false,
				msg: 'El usuario no existe',
			});
		}

		const { contraseña, google, correo, ...campos } = req.body;

		if (userDB.correo != correo) {
			const emailExist = await User.findOne({ correo: req.body.correo });

			if (emailExist) {
				return res.status(400).json({
					ok: false,
					msg: 'Ya existe un usuario con este Email',
				});
			}
		}

		campos.correo = correo;
		const usuarioUpdate = await User.findByIdAndUpdate(uid, campos, { new: true });

		res.json({
			ok: true,
			usuarioUpdate,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

module.exports = {
	getUsers,
	newUser,
	updateUser,
};
