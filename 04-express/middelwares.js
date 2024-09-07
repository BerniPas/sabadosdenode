

// creamos un meddleware para recibir una info de la petición
const info = (req, res, next) =>{

    console.log("Petición recibida");
    const fecha = new Date();
    console.log(fecha);
        
    next() 
    //es para que la petición continúe
    
}


module.exports = {
    info
}