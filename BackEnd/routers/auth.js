/*
    Ruta: /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { loginUser } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/login', [
    check('correo', 'El email es obligatorio').isEmail(),
    check('contraseña', 'El password es obligatorio').not().isEmpty(),
    validarCampos,
],
loginUser);

    
module.exports = router;