
const express = require('express');
const router = express.Router();
const {
    userIndex,
    userRegister,
    userLoginView,
    userCreate,
    userLogin,
    userAdmin
} = require('../controllers/usersControllers');


// Ruta para el Home de la pizzería
router.get('/', userIndex);

// Ruta para el registro de usuarios
router.get('/registro', userRegister);

// Ruta para la vista del Login de usuarios
router.get('/login', userLoginView);

router.get('/admin', userAdmin);

// Ruta para el inicio de sesión de usuarios
router.post('/login', userLogin);

// Ruta para crear un nuevo usuario
router.post('/create', userCreate);


module.exports = router; 