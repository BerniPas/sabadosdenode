import express from 'express';
const router = express.Router();

import { 
    apiRegisterUsers,
    apiLoginUsers 
} from '../controllers/userApiControllers.js';

// responde a la ruta /api/user


router.post('/register', apiRegisterUsers);
router.post('/login', apiLoginUsers);


export default router;
