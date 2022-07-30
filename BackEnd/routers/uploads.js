/*
    Ruta: /api/uploads
*/
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { uploadFiles, uploadMultipleFiles, getImages } = require('../controllers/uploads');

const router = Router();

router.get('/:image', getImages);
router.post('/', uploadFiles);
router.post('/upload/:id', uploadMultipleFiles);

module.exports = router;