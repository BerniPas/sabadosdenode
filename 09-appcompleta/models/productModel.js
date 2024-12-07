import { Schema, model } from "mongoose";

const productSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true
    },
    precioProducto: {
        type: Number,
        required: true
    },
    descripcionProducto: {
        type: String,
        required: true
    },
    stockProducto: {
        type: Number,
        required: true
    },
    imagenProducto: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

export default model("products", productSchema);