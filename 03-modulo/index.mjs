
import express from 'express';

// exportamos una constante
export const PORT = 3000;

const app = express();

//get. método que solicita recursos del servidor
app.get('/', (req, res)=>{
    res.send('Bienvenido a nuestro Backend en Express');
});

//post. método que envía datos al servidor
app.post('/enviar', (req, res)=>{
    res.send('Datos enviados al servidor');
});

//put. método que modifica recursos del servidor
app.put('/editar', (req, res)=>{
    res.send('Datos modificados en el servidor');
});

// patch. método que modifica recursos del servidor
app.patch(()=>{});

//delete. método que elimina recursos del servidor
app.delete('/eliminar', (req, res)=>{
    res.send('Datos eliminados del servidor');
});

const sumar = (a, b) => {
    console.log('Suma:', a + b);
}

//exportar una sóla función
//export default app;


//exportar con desestructuración
export {
    app, 
    sumar
}; 