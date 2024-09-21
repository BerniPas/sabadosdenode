const { Response } = require("express");

const homeUsers = (req, res = Response) => {
    res.render('users')
}

const loginUsersViews = (req, res = Response) => {
    res.render('loginUser')
}

const loginUsers = (req, res = Response) => {

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
    
    // ############### Reallizamos validaciones para el login ###############
    let userAdmin = 'pepe@gmail.com';
    let nombreAdmin = 'Pepe';
    let passwordAdmin = '123456';

    if(emailUser === userAdmin && passwordUser === passwordAdmin){
        return res.render('admin', {
            mensaje: `Bienvenido ${nombreAdmin}`
        });
    }


    res.send('Tus datos han sido enviados correctamente');
    
}


module.exports = {
    homeUsers,
    loginUsersViews,
    loginUsers
}

