
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

// conexión directa a mongo
// mongoose.connect(MONGO_LOCAL);

const conexión = mongoose.connect(MONGO_LOCAL, { 
/*     version: '1', 
    strict: true, 
    deprecationErrors: true  */

/*     useNewUrlParser: true,
    useUnifiedTopology: true, */


}).then(() => {
    console.log('Conexión a la base de datos establecida');
}).catch(err => {    
    console.log('Error de conexión a la base de datos', err);
})/* .finally(() => {
    console.log('Conexión finalizada');
}) */;


module.exports = conexión;

