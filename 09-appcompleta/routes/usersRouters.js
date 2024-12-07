
import express from 'express';
import { check } from 'express-validator';

const router = express.Router();

import {
    userIndex,
    userRegister,
    userLoginView,
    userCreate,
    userLogin,
    userAdmin
} from '../controllers/usersControllers.js';


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
router.post('/create', 
    [
        check('nombre').isLength({ min: 3, max: 25 }).withMessage('El nombre debe tener entre 3 y 25 caracteres'),
        check('email').isEmail().withMessage('El email no es válido'),
        check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ]
    ,
    userCreate
);

export default router;

