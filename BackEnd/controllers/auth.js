const { response } = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { generarToken } = require('../helpers/jwt');
const Product = require('../models/product');

const loginUser = async (req, res = response) => {
	const { correo, contraseña } = req.body;
	try {
		//Validar Email
		const userDB = await User.findOne({ correo }).populate('provincia', 'name');
		if (!userDB) {
			return res.json({
				ok: false,
				msg: 'Usuario o contraseña son incorrectos',
			});
		}
		//validar password
		const validPassword = bcrypt.compareSync(contraseña, userDB.contraseña);
		if (!validPassword) {
			return res.status(401).json({
				ok: false,
				msg: 'Usuario o contraseña son incorrectos',
			});
		}
		//Generar el TOKEN
		const token = await generarToken(userDB.id);

		const productCount = await Product.find({ usuario: userDB.id }).count();

		res.status(200).json({
			ok: true,
			token,
			name: userDB.nombre,
			apellido: userDB.apellido,
			uid: userDB.id,
			img: userDB.img[0],
			userDB,
			productCount: productCount,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			ok: true,
			msg: 'hable con el administrador',
		});
	}
};

module.exports = {
	loginUser,
};
