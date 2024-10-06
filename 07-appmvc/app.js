const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const homeRouter = require('./routes/homeRouters');
const apiRouter = require('./routes/userApiRouters');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , './public')));

app.use(cors());

// rutas con vistas
app.use('/', homeRouter);
app.use('/user', require('./routes/usersRouters'));


// rutas para la api
app.use('/api/user', apiRouter);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));
hbs.registerPartials(path.join(__dirname, './views/partials'));

app.get('/*', (req, res) => {
    res.render('error');
});


module.exports = app;



