const { Response } = require("express");

// importamos el modelo del user de mongoose
const Usuario = require('../models/usuarioModel');


const homeUsers = (req, res = Response) => {
    res.render('users')
}

const loginUsersViews = (req, res = Response) => {
    res.render('loginUser')
}
const registerUsersViews = (req, res = Response) => {
    res.render('registro')
}

// Registramos usuarios nuevos
const registerUsers = async (req, res = Response) => {

    let { nombre, email, password } = req.body;
    //console.log(nombre, email, password);

    nombre = nombre.toLowerCase()

    // ejemplos para consumir datos del formulario
    const usuarioData = {
        nombre,
        email,
        password
    }

    // opción de desestructuración de objetos
    const persona = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    };

    if(nombre == '' || email == '' || password == ''){
        return res.render('registro', {
            mensaje: 'Todos los campos son obligatorios' 
        });
    }

    //conexión con la database para insertar datos del user
    try {

        const nuevoUsuario =  await Usuario.findOne({ email });

        console.log(nuevoUsuario);

        if(nuevoUsuario){
            return res.render('registro', {
                mensaje: 'El Usuario ya existe'
            });
        } else {

            //creamos un nuevo usuario
            const usuario = new Usuario(usuarioData);

            // gurdamos el usuario en la base de datos
            await usuario.save();

            return res.render('registrado', {
                mensaje: 'Usuario registrado correctamente'
            });

        }
    } catch (error) {
        return res. render('registrado', {
            mensaje: 'No estás registrado - Estamos trabajando en el problema'
        });
    }

    
}

// Login de usuarios
const loginUsers = async (req, res = Response) => {

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
        return res.render('loginUser', {
            mensaje: 'Todos los campos son obligatorios' 
        });// en objeto enviamos un mensaje de error
    }

    try {

        const usuario = await Usuario.findOne({ email });

        console.log(usuario);
        

        if(!usuario){
            return res.render('registro', {
                mensaje: 'El Usuario no existe, registrarse'
            });
        }

        if(usuario.password == password && usuario.email == email){
            return res.render('admin', {
                mensaje: `Bienvenido Administrador ${usuario.nombre}`
            });
        }else{
            return res.render('loginUser', {
                mensaje: 'El email o el password son incoerrectos'
            });
        }
    
    
        
    } catch (error) {
        return res. render('registrado', {
            mensaje: 'No estás registrado - Estamos trabajando en el problema'
        });
    }

    
}


module.exports = {
    homeUsers,
    loginUsersViews,
    registerUsersViews,
    registerUsers,
    loginUsers
}

