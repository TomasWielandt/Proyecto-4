//se importan las librerias
const express = require("express");
const dotenv = require("dotenv");

//se cargan las variables del archivo .env
dotenv.config();

//creación de aplicación express
const app = express();

//definición de puerto
const port = process.env.PORT || 3000;

//se añade el middleware para parsear el cuerpo JSON de las solicitudes
app.use(express.json())

//middleware de manejo de error 404
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

//se inicia el servidor en el puerto definido
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});