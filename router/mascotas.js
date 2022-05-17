const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'jdjdjd', nombre: 'MIMO', descripcion: 'MIMO descripcion'},
            {id: 'djdjdjd', nombre: 'OMIM', descripcion: 'OMIM descripcion'}
        ]
    })
})

module.exports = router;