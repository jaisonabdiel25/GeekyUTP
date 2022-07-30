/*
    Ruta: /api/users
*/
const { check } = require('express-validator');
const { Router } = require('express');
const { getUsers, newUser, updateUser } = require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validarJWT, getUsers);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('contraseña', 'El password es obligatorio').not().isEmpty(),
    check('correo', 'El email es obligatorio').isEmail(),
    validarCampos,
], newUser);
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos,
], updateUser);


module.exports = router;