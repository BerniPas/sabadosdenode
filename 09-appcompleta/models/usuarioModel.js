import mongoose from 'mongoose';

import { Schema } from 'mongoose';

// Definición del esquema para el modelo de cliente
const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});


export default mongoose.model('clientes', clienteSchema);  