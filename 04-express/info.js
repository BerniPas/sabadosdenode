const dotenv = require("dotenv");
dotenv.config();

console.log(process);

// agregamos una variable global para que esté disponible en toda la aplicación
global.hola = "Hola Mundo";

// imprimimos todas las variables de entorno de node
console.log(process.env);

// imprimimos las variables de entorno del archivo .env y las globales
console.log(process.env.PORT);
console.log(process.env.EMAIL);

// puertos comunes de apps
// 3000: react
// 8080: springboot
// 9000: apache java
// 4200: angular
// 27057: mongodb
// 3306: mysql

//imprimimos la variable global
console.log(hola);


// métodos de respuesta de express
//res.send()
//json()
//download()
//redirect()
//render()
//end()

//Middleware
// son funciones que se encuentran entre la petición y la respuesta
// app.use()