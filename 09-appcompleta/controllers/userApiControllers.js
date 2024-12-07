import  { request, response } from "express";

// importamos el modelo del user de mongoose
import Clientes from '../models/usuarioModel.js';


// Registramos usuarios nuevos
const apiRegisterUsers = async (req, res = response) => {

    let { nombre, email, password, edad } = req.body;
    //console.log(nombre, email, password);

    //ejemplo de conversion de variables
    edad = Number(edad);

    nombre = nombre.toLowerCase()

    // ejemplos para consumir datos del formulario
    const usuarioData = {
        nombre,
        email,
        password, 
        edad
    }

    console.log(usuarioData);
    

    // opción de desestructuración de objetos
    const persona = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    };

    console.log(persona);
    

    if(nombre == '' || email == '' || password == ''){
        return res.json({
            mensaje: 'Todos los campos son obligatorios' 
        });
    }

    //conexión con la database para insertar datos del user
    try {

        const nuevoUsuario =  await Clientes.findOne({ email });

        console.log(`1. ${nuevoUsuario}`);

        if(nuevoUsuario){
            return res.json({
                mensaje: 'El Usuario ya existe'
            });
        } else {

            //creamos un nuevo usuario
            const usuario = new Clientes(usuarioData);

            // gurdamos el usuario en la base de datos
            await usuario.save();

            return res.status('200').json({
                mensaje: 'Usuario registrado correctamente'
            });

        }
    } catch (error) {
        return res.json({
            mensaje: 'No estás registrado - Estamos trabajando en el problema'
        });
    }

    
}

// Login de usuarios
const apiLoginUsers = async (req, res = response) => {

    // ############### Recibimos los datos del formulario ###############
    
    console.log(req.body); // { email: 'valor', password: 'valor' }
    
    const emailUser = req.body.email;
    const passwordUser = req.body.password;
    
    console.log(emailUser);
    console.log(passwordUser);
    
    const { email, password } = req.body;
    console.log(email, password);
    
    // ############### Reallizamos validaciones para el formulario ###############
    
    if(emailUser == '' || passwordUser == ''){
        return res.json({
            mensaje: 'Todos los campos son obligatorios' 
        });// en objeto enviamos un mensaje de error
    }

    try {

        const usuario = await Clientes.findOne({ email });

        console.log(usuario);
        

        if(!usuario){
            return res.json({
                mensaje: 'El Usuario no existe, registrarse'
            });
        }

        if(usuario.password == password && usuario.email == email){
            return res.json({
                mensaje: `Bienvenido Administrador ${usuario.nombre}`
            });
        }else{
            return res.json({
                mensaje: 'El email o el password son incoerrectos'
            });
        }
    
    
        
    } catch (error) {
        return res.json({
            mensaje: 'No estás registrado - Estamos trabajando en el problema'
        });
    }

    
}

export	{
    apiRegisterUsers,
    apiLoginUsers
}