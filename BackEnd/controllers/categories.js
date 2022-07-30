const { response } = require('express');
const Categorie = require('../models/categorie');

const getCategories = async (req, res = response) => {
	const categorie = await Categorie.find();

	res.json({
		ok: true,
		categorie,
	});
};

const newCategorie = async (req, res = response) => {
	const { name } = req.body;

	const categorieExist = await Categorie.findOne({ name });
	if (categorieExist) {
		return res.status(400).json({
			ok: false,
			msg: 'La categoria ya existe',
		});
	}
	try {
		const categorieDB = new Categorie(req.body);

		await categorieDB.save();
		res.json({
			ok: true,
			categorieDB,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

const updateCategorie = async (req, res = response) => {
	const uid = req.params.id;

	try {
		const categorieDB = await Province.findById(uid);
		if (!categorieDB) {
			return res.status(404).json({
				ok: false,
				msg: 'La Provincia no existe',
			});
		}

		const body = {
			name: req.name,
		};

		const provinceUpdate = await Province.findByIdAndUpdate(uid, body, {
			new: true,
		});

		res.json({
			ok: true,
			provinceUpdate,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

module.exports = {
	getCategories,
	newCategorie,
	updateCategorie,
};
