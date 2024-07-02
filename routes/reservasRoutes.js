//importación de Express
const express = require('express');

//enrutador de express 
const router = express.Router();

//importación del controlador
const reservasController = require('../controllers/reservasController');

//definición de rutas
router.post('/', reservasController.crearReserva);
router.get('/', reservasController.obtenerReservas);
router.get('/:id', reservasController.obtenerReserva);
router.put('/:id', reservasController.actualizarReserva);
router.delete('/:id', reservasController.eliminarReserva);


//exportación de router
module.exports = router;