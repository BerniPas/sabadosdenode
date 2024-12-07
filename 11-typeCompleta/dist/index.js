"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/miapp';
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Rutas
app.use('/usuarios', usuarios_1.default);
// Conexión a MongoDB
mongoose_1.default.connect(mongoUri);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
