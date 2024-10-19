const dotenv = require('dotenv');
dotenv.config();
require('./conexion/conexion');


const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});

