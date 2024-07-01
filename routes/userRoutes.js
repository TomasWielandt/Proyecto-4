//importación de Express
const express = require('express');

//enrutador de express 
const router = express.Router();

//importación del controlador
const controller = require('../controllers/controller');

//definición de rutas
router.post('/', controller.crearReserva);
router.get('/', controller.obtenerReservas);
router.get('/:id', controller.obtenerReserva);
router.put('/:id', controller.actualizarReserva);
router.delete('/:id', controller.eliminarReserva);


//exportación de router
module.exports = router;