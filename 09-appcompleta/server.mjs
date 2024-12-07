
import dotenv from 'dotenv';
import conexion from './conexion/conexion.js';
dotenv.config();

import app from './app.mjs';

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});

