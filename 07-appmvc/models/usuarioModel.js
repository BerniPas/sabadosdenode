const mongoose  = require('mongoose');
const Schema = mongoose.Schema;


// creamos la estructura de la colección de usuarios
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: new Date()
    }
});

module.expots = mongoose.model('Usuario', usuarioSchema);