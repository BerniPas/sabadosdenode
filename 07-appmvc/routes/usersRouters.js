


const express = require('express');
const usersRouter = express.Router();

//     responde a la ruta /users

usersRouter.get('/', (req, res) => {
    res.render('users')
});


module.exports = usersRouter;