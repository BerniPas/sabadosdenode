const { Response, Request } = require('express');



const home = (req, res = Response) => {

        res.render('index')
}

module.exports = {
    home
}