const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const homeRouter = require('./routes/homeRouters');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , './public')));

app.use(cors());

app.use('/home', homeRouter);
app.use('/user', require('./routes/usersRouters'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));
hbs.registerPartials(path.join(__dirname, './views/partials'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/sucursales', (req, res) => {
    res.render('sucursales')
});

app.get('/*', (req, res) => {
    res.render('error');
});




module.exports = app;



