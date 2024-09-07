const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const morgan = require("morgan");

// Middleware para recibir datos en formato JSON
// app.use() // middleware global, a todas las rutas
app.use(express.json());

// Middleware para recibir info de las peticiones
app.use(morgan('combined'));

// importo mi propio middleware
const {info} = require("./middelwares");


/* // creamos un meddleware para recibir una info de la petición
const info = (req, res, next) =>{

    console.log("Petición recibida");
    const fecha = new Date();
    console.log(fecha);
        
    next() 
    //es para que la petición continúe
    
} */

// uso mi propio middleware de forma global
//app.use(info);

// respondemos con un mendaje de bienvenida
app.get("/", (req, res) => {
    //a la respuesta agregamos un código de estado 200: todo OK
    res.status(200).send("Bienvenido a nuestro Backend en Express");
});

// respondemos con un código de HTML con Bootstrap
// uso mi middleware de forma local: para esta ruta solamente
app.get("/formulario", info , (req, res) => {
    //a la respuesta agregamos un código de estado 200: todo OK
    res.status(200).send(`<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body class="container mt-5">

    <h1 class="text-center mt-5">
    Completa el Formulario
    </h1>

    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>`);
});

// descargamos un archivo 
app.get("/download", (req, res) => {
    //a la respuesta agregamos un código de estado 200: todo OK
    res.status(200).download('descargas.txt');
});

// página de error 404, a cualquier ruta que no exista
app.get("/*", (req, res) => {
    // lanzamos un 404
    res.status(404).send(`<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body class="container mt-5">

    <h1 class="text-center mt-5" style="color: red">
    Error 404: Página no encontrada
    </h1>

    <img src="https://http.cat/404" alt="Error 404" class="img-fluid">   


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>`);
});

// el cliente envía datos al servidor
app.post("/enviar", (req, res) => {

    //console.log(req);
    

    //recibimos datos del front
    console.log(req.body);

    res.status(200).send("Datos recibidos en el servidor");
});


app.listen(process.env.PORT, () => {
    console.log(
        `Servidor escuchando en el puerto http://localhost:${process.env.PORT}`
    );
});
