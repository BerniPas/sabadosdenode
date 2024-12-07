import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import hbs from 'hbs';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import compression from 'compression';
dotenv.config();

import session from 'express-session';
import MongoStore from 'connect-mongo';

// importamos las rutas
import userRouter from './routes/usersRouters.js';
import apiRouter from './routes/userApiRouters.js';
import productRouters from './routes/productRouters.js';

const app = express();

// si usamos __dirname, __filename, no funcionará en módulos ES6
// import { fileURLToPath } from 'url';

// Obtener la URL del módulo actual
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, 'public')));

// opciones de cors: cambiar para usar la ruta de userApiControllers
const whitelist = ['http://mercadopago.com', 'http://modo.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// guardar las sesiones en la base de datos
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_ATLAS
    }),
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser())
app.use(morgan('dev'));
app.use(compression());

app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials(path.join('views/partials'));
// hbs.registerPartials(path.join(__dirname, 'views/partials'));

// rutas para la api
app.use('/api/user', cors(corsOptions), apiRouter);

// rutas para el fronts
app.use('/', userRouter);
app.use('/product', productRouters);

app.get('/*', (req, res) => {
    res.render('error');
});

export default app;
