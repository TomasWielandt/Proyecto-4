//se importan express, dotenv y userRoutes
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

//se cargan las variables del archivo .env
dotenv.config();

//creación de aplicación express
const app = express();

//definición de puerto
const port = process.env.PORT || 3000;

//se añade el middleware para parsear el cuerpo JSON de las solicitudes
app.use(express.json());

//middleware para analizar las solicitudes entrantes
app.use(express.urlencoded({ extended: true }));

//se define las rutas
app.use('/api/reservas', userRoutes);

//middleware de manejo de error 404
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

//se inicia el servidor en el puerto definido
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});