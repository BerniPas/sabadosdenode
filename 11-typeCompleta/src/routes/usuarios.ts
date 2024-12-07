import { Router } from 'express';
import Usuario from '../models/Usuario';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    const nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            {
                nombre: req.body.nombre,
                email: req.body.email,
            },
            { new: true }
        );
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
