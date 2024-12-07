import productModel from "../models/productModel.js";
import { validationResult } from 'express-validator';

const createProduct = async (req, res) => {

    //verificar datos con body y validatorResult
    const errores = await validationResult(req);

    if(!errores.isEmpty()){
        res.render('error', {
            mensaje: errores.array()[0].msg
        });
    }

    //convertir a number los string
    //const precioProducto = parseInt(req.body.precioProducto);

    const { 
        nombreProducto, 
        precioProducto, 
        descripcionProducto, 
        stockProducto, 
        imagenProducto } = req.body;

    const newProduct = new productModel({
        nombreProducto, 
        precioProducto, 
        descripcionProducto, 
        stockProducto, 
        imagenProducto
    });

    console.log(newProduct);

    try {

        await newProduct.save();
        return res.render('formProductos');

    } catch (error) {
        return res.render('error', {
            mensaje: "El producto no se pudo registrar, intente de nuevo",
            style: 'le envío mi estilo personalizado' // ejemplo de estilos personalizados
        });
    }
    


};



const getProducts = async (req, res) => {

    const products = await productModel.find();
    return res.render('productos', {
        products
    });

};


const deleteProduct = async (req, res) => {

    const id = req.params._id;

    console.log(id);

    try {

        const eliminado = await productModel.findByIdAndDelete(id);

        console.log(eliminado);

        //guardamos en otra coleccion el producto eliminado
        //await productModel.save(eliminado);

        const products = await productModel.find();

        return res.render('productos', {
            products
        });
        
    } catch (error) {
        return res.render('error', {
            mensaje: "El producto no se pudo borrar, intente de nuevo"
        });
        
    }

};


const updateProduct = async (req, res) => {

    const id = req.params._id;

    try {

        const productoParaActualizar = await productModel.findById(id);

        console.log(productoParaActualizar);

        //guardamos en otra coleccion el producto que actualizamos
        //await productModel.save(productoParaActualizar);


        return res.render('formUpdate', {
            products: productoParaActualizar
        });
        
    } catch (error) {
        return res.render('error', {
            mensaje: "El producto no se pudo encontrar, intente de nuevo"
        });
        
    }
};


const updateProductFinal = async (req, res) => {
    
    const id = req.params._id;

        console.log(id);

    try {

        const data = {
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            descripcionProducto: req.body.descripcionProducto,
            stockProducto: req.body.stockProducto,
            imagenProducto: req.body.imagenProducto
        } 

        const productoActualizado = await productModel.findByIdAndUpdate({_id: id}, data, {new: true});

        console.log(productoActualizado);

        //guardamos en otra coleccion el producto que actualizamos
        //await productModel.save(productoParaActualizar);

        // buscamos los productos actualizados
        const products = await productModel.find();

        return res.render('productos', {
            products
        });
        
    } catch (error) {
        return res.render('error', {
            mensaje: "El producto no se pudo actualizar, intente de nuevo"
        });
        
    }
}



const getProductById = async (req, res) => {};

export { 
    createProduct, 
    getProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct,
    updateProductFinal
};