const { Router } = require('express');
const { 
    apiRegisterUsers,
    apiLoginUsers 
} = require('../controllers/userApiControllers');

const router = Router();


// responde a la ruta /api/user


router.post('/register', apiRegisterUsers);
router.post('/login', apiLoginUsers);


module.exports = router;
