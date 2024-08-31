
//const app = require('./express');
//const PORT = 3000;

const {
    app,
    sumar,
    PORT
} = require('./express');

sumar(50,20);

//levantamos el sevidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});