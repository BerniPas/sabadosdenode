"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario_1.default.find();
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoUsuario = new Usuario_1.default({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const usuarioGuardado = yield nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Usuario_1.default.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioActualizado = yield Usuario_1.default.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            email: req.body.email,
        }, { new: true });
        res.json(usuarioActualizado);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
exports.default = router;
