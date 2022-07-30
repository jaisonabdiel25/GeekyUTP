const { response } = require('express');
const Product = require('../models/product');

const newProduct = async (req, res = response) => {
	try {
		console.log(req.body);
		const productDB = new Product(req.body);

		//Guardar producto
		await productDB.save();
		console.log(productDB.id);

		res.json({
			ok: true,
			productDB,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

const getProductsForBrands = async (req, res) => {
	const id = req.params.id;

	try {
		const products = await Product.find({ brand: id })
			.populate('categoria', 'name')
			.populate('subcategoria', 'name')
			.populate('ubicacion', 'name')
			.populate('brand', 'name')
			.populate('usuario', 'nombre');

		res.status(200).json({
			ok: true,
			products,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: 'error inesperado',
		});
	}
};

const getProductsForCategori = async (req, res) => {
	const id = req.params.id;

	try {
		const products = await Product.find({ categoria: id })
			.populate('categoria', 'name')
			.populate('subcategoria', 'name')
			.populate('ubicacion', 'name')
			.populate('brand', 'name')
			.populate('usuario', 'nombre');

		res.status(200).json({
			ok: true,
			products,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: 'error inesperado',
		});
	}
};

const getProduct = async (req, res) => {
	const id = req.params.id;

	try {
		const product = await Product.findById(id)
			.populate('categoria', 'name')
			.populate('subcategoria', 'name')
			.populate('ubicacion', 'name')
			.populate('brand', 'name')
			.populate('usuario', ['nombre', 'img']);

		const productCount = await Product.find({ usuario: product.usuario._id }).count();

		res.status(200).json({
			ok: true,
			product,
			productCount,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: 'error inesperado',
		});
	}
};

const uploadImage = async (req, res = response) => {
	const id = req.params.id;
	const body = req.body;
	console.log(body);

	const productUploadImage = await Product.findByIdAndUpdate(id, body, {
		new: true,
	});

	res.json({ ok: true, product: productUploadImage });
};

const getProductsUI = async (req, res) => {
	const id = req.params.id;

	try {
		const products = await Product.find({ brand: id })
			.populate('categoria', 'name')
			.populate('subcategoria', 'name')
			.populate('ubicacion', 'name')
			.populate('brand', 'name')
			.populate('usuario', 'nombre');

		res.status(200).json({
			ok: true,
			products,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: 'error inesperado',
		});
	}
};

const getProducts = async (req, res) => {
	try {
		const products = await Product.find()
			.populate('categoria', 'name')
			.populate('subcategoria', 'name')
			.populate('ubicacion', 'name')
			.populate('brand', 'name')
			.populate('usuario', 'nombre');

		res.status(200).json({
			ok: true,
			products,
		});
	} catch (error) {
		res.status(400).json({
			ok: false,
			msg: 'error inesperado',
		});
	}
};

module.exports = {
	newProduct,
	getProductsForBrands,
	getProduct,
	uploadImage,
	getProductsForCategori,
	getProductsUI,
	getProducts,
};
