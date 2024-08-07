//se importan express, dotenv y cors 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//se importa userRoutes
const routes = require("./routes/reservaRoutes");

//se importa configuración de swagger
const swaggerSetup = require('./swagger');

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

//middleware de cors
app.use(cors());

//ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Gestión de Reservas de Hotel');
});

//se define las rutas
app.use('/api/reservas', routes);

//se llama a la configuración de swagger
swaggerSetup(app);

//se inicia el servidor en el puerto definido
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});