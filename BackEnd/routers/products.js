/*
    Ruta: /api/products
*/
const { check } = require('express-validator');
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const {
	newProduct,
	getProductsForBrands,
	getProduct,
	uploadImage,
	getProductsForCategori,
	getProductsUI,
	getProducts,
} = require('../controllers/products');

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductsForBrands);
router.get('/getProductsForCategori/:id', getProductsForCategori);
router.get('/getProductsUI/:id', getProductsUI);
router.get('/getProduct/:id', getProduct);
router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio').not().isEmpty(),
		check('categoria', 'La categoria del producto es obligatoria').not().isEmpty(),
		check('subcategoria', 'La subcategoria del producto es obligatoria').not().isEmpty(),
		check('brand', 'La marca es obligatoria').not().isEmpty(),
		check('modelo', 'El modelo es obligatorio').not().isEmpty(),
		check('estado', 'El estado del producto es obligatorio').not().isEmpty(),
		check('tipoVenta', 'El tipo de venta es obligatorio').not().isEmpty(),
		check('precio', 'El precio del producto es obligatorio').not().isEmpty(),
		check('ubicacion', 'La ubicacion es obligatoria').not().isEmpty(),
		check('metodoEntrega', 'El metodo de entrega de la venta es obligatorio').not().isEmpty(),
		validarCampos,
	],
	newProduct
);
router.post('/:id', uploadImage);

module.exports = router;
