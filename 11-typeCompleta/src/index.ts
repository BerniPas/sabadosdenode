import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import usuariosRouter from './routes/usuarios';

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/miapp';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/usuarios', usuariosRouter);

// Conexión a MongoDB
mongoose.connect(mongoUri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
