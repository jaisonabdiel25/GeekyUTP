const { response } = require('express');
const Coment = require('../models/coments');

const getComents = async (req, res = response) => {
	console.log(req.params.id);
	const coments = await Coment.find({ user: req.params.id }).populate('user', 'nombre').populate('userComent', ['nombre', 'img']);
	res.json({
		ok: true,
		coments,
	});
};

const newComent = async (req, res = response) => {
	const coment = req.body;
	try {
		const comentDB = new Coment(coment);
		await comentDB.save();
		res.json({
			ok: true,
			comentDB,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

module.exports = {
	getComents,
	newComent,
};
