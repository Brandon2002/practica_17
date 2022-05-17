const moongose = require('moongose');
const Schema = moongose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

//Creación del modelo
const Mascota = moongose.model('Mascota', mascotaSchema);

module.exports = Mascota;