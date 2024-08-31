

//import app from './index.mjs';

import {
    app,
    sumar,
    PORT
} from './index.mjs';


/* const PORT = 3000; */

sumar(50,20);

//levantamos el sevidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});