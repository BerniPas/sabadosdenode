

const express = require('express');
const homeRouter = express.Router();
const {
    home
} = require('../controllers/homeControllers');

//     responde a la ruta /home

homeRouter.get('/', home);









module.exports = homeRouter;