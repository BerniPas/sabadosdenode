const express = require('express');
const usersRouter = express.Router();
const { 
    homeUsers,
    loginUsersViews,
    loginUsers
} = require('../controllers/usersControllers');

//     responde a la ruta /users

// página principal de usuarios
usersRouter.get('/', homeUsers);

// login de usuarios
usersRouter.get('/login', loginUsersViews);

// recibimos los datos para el login
usersRouter.post('/login', loginUsers);



module.exports = usersRouter;