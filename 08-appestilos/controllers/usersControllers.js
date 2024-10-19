const Clientes = require('../models/usuarioModel');

const userIndex = (req, res) => {
    res.render('index');
}

const userLoginView = (req, res) => {
    res.render('login');
}

const userRegister = (req, res) => {
    res.render('registro');
}


//Función para crear un nuevo usuario
const userCreate = async (req, res) => {


    //Recibimos los datos del formulario
    const { nombre, email, password } = req.body;

    //Analizamos en consola los datos
    console.log(`1. Datos recibidos ${nombre} - ${email} - ${password}`);

    //Intentamos la conexión a la base de datos
    try {
        //Verificamos si el usuario existe en la base de datos
        let usuarioNuevo = await Clientes.findOne({ email });
        console.log(`2. ${usuarioNuevo}`);

        if (usuarioNuevo) {
            return res.render('error', {
                mensaje: mensajeErrorUser
            })
        }

        //Creamos el usuario utlizando el modelo Cientes
        usuarioNuevo = new Clientes(req.body);

        console.log(`6. Usuario Nuevo: ${usuarioNuevo}`);

        //Guardamos el usuario en la base de datos
        await usuarioNuevo.save();

        // Renderizamos la página de inicio
        return res.render('index', {
            mensaje: 'Usuario Creado Correctamente, Inicia Sesión para realizar tu pedido'
        });


    } catch (error) {
        //En caso de error, renderizamos la página de error
        return res.render('error', {
            mensajeErrorData
        });
    }


}


// Función para el inicio de sesión de un usuario
const userLogin = async (req, res) => {
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
                return res.render('login', {
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
        userIndex,
        userRegister,
        userLoginView,
        userCreate,
        userLogin
    }    

