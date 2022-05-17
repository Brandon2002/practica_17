const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//conexion a base de datos
const mongoose = require('mongoose');
const user = 'nuevo';
const password = 'nuevo1234';
const dbname = 'veterinaria'
const uri = `mongodb+srv://${user}:${password}@cluster0.3vt96.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
  
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/mascotas'))

app.listen(port, () => {
    console.log('Servidor a su servicio');
});
