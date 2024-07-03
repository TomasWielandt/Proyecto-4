//importación de Express
const express = require('express');

//enrutador de express 
const router = express.Router();

//importación del controlador
const controller = require('../controllers/controller');

//definición de rutas
/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: API para gestionar reservas de hotel
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFin:
 *                 type: string
 *                 format: date
 *               tipoHabitacion:
 *                 type: string
 *               estado:
 *                 type: string
 *               numHuespedes:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 *       400:
 *         description: Error en los datos enviados
 */
router.post('/', controller.crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     tags: [Reservas]
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: Nombre del hotel
 *       - in: query
 *         name: fecha_inicio
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de inicio de la reserva
 *       - in: query
 *         name: fecha_fin
 *         schema:
 *           type: string
 *           format: date
 *         description: Fecha de fin de la reserva
 *       - in: query
 *         name: tipo_habitacion
 *         schema:
 *           type: string
 *         description: Tipo de habitación
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *         description: Estado de la reserva
 *       - in: query
 *         name: num_huespedes
 *         schema:
 *           type: integer
 *         description: Número de huéspedes
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', controller.obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Reserva no encontrada
 */
router.get('/:id', controller.obtenerReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *                 format: date
 *               fechaFin:
 *                 type: string
 *                 format: date
 *               tipoHabitacion:
 *                 type: string
 *               estado:
 *                 type: string
 *               numHuespedes:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Reserva actualizada exitosamente
 *       404:
 *         description: Reserva no encontrada
 *       400:
 *         description: Error en los datos enviados
 */
router.put('/:id', controller.actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reserva
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', controller.eliminarReserva);


//exportación de router
module.exports = router;