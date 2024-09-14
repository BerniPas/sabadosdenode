

const express = require('express');
const homeRouter = express.Router();

//     responde a la ruta /home

homeRouter.get('/', (req, res) => {
    res.render('index')
});









module.exports = homeRouter;