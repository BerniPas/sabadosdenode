const express = require('express');
const usersRouter = express.Router();
const { 
    homeUsers,
    loginUsersViews,
    registerUsersViews,
    registerUsers,
    loginUsers
} = require('../controllers/usersControllers');

//     responde a la ruta /users

// página principal de usuarios
usersRouter.get('/', homeUsers);

// login de usuarios
usersRouter.get('/login', loginUsersViews);
usersRouter.get('/register', registerUsersViews);

// recibimos los datos para el login
usersRouter.post('/login', loginUsers);
usersRouter.post('/register', registerUsers);



module.exports = usersRouter;