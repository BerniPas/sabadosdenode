

// ES5
const http = require('http');

// ES6
//import http from 'http';

const os = require('os');

// req: petición
// res: respuesta

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());


// variables de módulos globales de node
console.log(__dirname);
console.log(__filename);





const servidor = http.createServer(  function(peticion, respuesta) {

    console.log(peticion);

    console.log('==================================================');
    console.log('==================================================');
    
    console.log(process);
    
    
    const url = peticion.url;

    switch(url) {
        case '/':
            respuesta.writeHead(200, {'Content-Type': 'text'});
            respuesta.end('Hola mundo');
            break;
        case '/productos':
            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.end('<h1>Productos en venta</h1>');
            break;
        default:
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write('<h1>404 - Página no encontrada</h1>');
            respuesta.end();
            break;
    }

} );

const PORT = 3000;

servidor.listen(PORT, function() {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});