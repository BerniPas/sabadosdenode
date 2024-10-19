const express = require('express');

require('dotenv').config();
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = require('express')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use(morgan('dev'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// rutas con vistas
const userRouter = require('./routes/usersRouters');
const apiRouter = require('./routes/userApiRouters');

// rutas para la api
app.use('/api/user', apiRouter);

// app.use('/user', require('./routes/userRouter'));
app.use('/', userRouter);


app.get('/*', (req, res) => {
    res.render('error');
});


module.exports = app;



