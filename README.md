![](https://github.com/UDDBootcamp/7M_FULLSTACK_M4_PROY/blob/master/images/banner.png)

# PROYECTO 4: Reservas Hoteleras

## Índice

- [Planteamiento y Requisitos](#planteamiento-y-requisitos)
- [Usar el proyecto](#usar-el-proyecto)
- [Tecnologías usadas](#tecnologías-usadas)
- [Detalles de la implementación](#detalles-de-la-implementación)
- [Contacto](#contacto)

## Planteamiento y Requisitos
1. Construir una aplicación de servicios para la gestión de reservas en hoteles que involucre las 4 operaciones CRUD y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express.

2. Opcionalmente, realizar un proceso de investigación relacionado con la documentación de API, usando Swagger, con la estandarización OPENAPI, la cual se utiliza en equipos internacionales para construir servicios escalables.

Características del proyecto:

- Utilizar Node.js y Express para el desarrollo del servidor.
- Contar con un archivo .env para las variables de entorno, en el cual se establecerá el puerto.
- Contar con un archivo .gitignore que incluya las carpetas y archivos que deberán ocultarse para el repositorio.
- Usar una arquitectura de carpetas clara como se muestra a continuación. Se puede agregar más archivos, rutas, controladores o, si se prefiere, sintetizar. La idea es que la asignación de responsabilidades del código pueda ser ubicado fácilmente.

EJEMPLO_TU_PROYECTO
├─ .env
├─ .prettierrc
├─ README.md
├─ controllers
│  └─ TU_CONTROLADOR.js
├─ package-lock.json
├─ package.json
├─ routes
│  └─ TU_RUTA.js
└─ server.js  <- TU ARCHIVO DE ENTRADA

- Implementar los siguientes 10 endpoints.

| Descripción del Endpoint | Método | Endpoint | Ejemplo. Caso de uso. |
| :------------: | :------------: | :------------: | :------------: |
| Crear reserva | POST | /api/reservas | Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023. Necesito una habitación doble para dos adultos y un niño. |
| Obtener la lista de reservas | GET | /api/reservas | Como gerente del hotel, quiero ver una lista de todas las reservas para hoy para poder planificar el trabajo del personal de limpieza y recepción. |
| Obtener información de una reserva específica | GET | /api/reservas/:id | Como recepcionista, necesito verificar los detalles de la reserva del huésped que acaba de llegar al hotel. Su número de reserva es 12345. |
| Actualizar información de una reserva | PUT | /api/reservas/:id | Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". Originalmente reservé una habitación doble, pero ahora necesito una suite familiar. Mi número de reserva es 12345. |
| Eliminar una reserva específica | DELETE | /api/reservas/:id | Como viajero, tuve un cambio de planes y ya no necesito la habitación que reservé en el hotel "Hotel Paraíso". Mi número de reserva es 12345. |
| Filtrar reservas por hotel | GET | /api/reservas?hotel=HOTEL | Como gerente de una cadena de hoteles, quiero ver todas las reservas para el "Hotel Paraíso" para el próximo mes. |
| Filtrar reservas por rango de fechas | GET | /api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN | Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad para poder planificar el personal y las actividades necesarias. |
| Filtrar reservas por tipo de habitación | GET | /api/reservas?tipo_habitacion=TIPO_HABITACION | Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo para el próximo mes para asegurarme de que todo esté en perfectas condiciones para nuestros huéspedes VIP. |
| Filtrar reservas por estado | GET | /api/reservas?estado=ESTADO | Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago para poder hacer un seguimiento con los clientes. |
| Filtrar reservas por número de huéspedes | GET | /api/reservas?num_huespedes=NUM_HUESPEDES | Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5 personas para el próximo mes, para poder planificar las necesidades adicionales de estos grupos grandes. |

- Opcionalmente, documentar todos los endpoints utilizando Swagger y OpenAPI.
- Opcionalmente, configurar el proyecto para el despliegue en render.com.

## Usar el proyecto
### Despliegue con localhost
- Clonar este repositorio: https://github.com/TomasWielandt/Proyecto-4
- Situarse en la carpeta "proyecto-4":

`$ cd proyecto-4`

- Instalar las dependenecias:

`$ npm install`

- Asegurarse de tener un archivo .env con las variables de entorno. En este caso, se configuraró de esta forma:

`PORT=3000`

- Levantar el proyecto:

`npm start`

- Se accede al proyecto a través del navegador:

`localhost:3000/`

Cuando se accede al sitio se verá este mensaje:

[![bienvenida.png](https://i.postimg.cc/R0gxrgz4/bienvenida.png)](https://postimg.cc/cKtbwMHb)


- Agregar la siguiente ruta:

`http://localhost:3000/api-docs/`

Al acceder al sitio se verá la siguiente página:

[![swagger.png](https://i.postimg.cc/XNHKZdnq/swagger.png)](https://postimg.cc/t76nw1ZG)

Cada uno de los rectángulos permite ejecutar diferentes procesos. Se presiona el botón de "Try it out" para activar el área de edición, y luego, se usa "Execute", el cual permite ejecutar una petición al servidor y recibir la respuesta del mismo.

Esta interfaz aparece porque integramos Swagger UI, lo cual simula un cliente como "Postman". Se utiliza principalmente para documentación dentro de equipos grandes para confirmar funcionamiento y diferentes ejemplos.

### Despliegue con render.com
- Ingresar al siguiente link: https://proyecto-4-reservas-hoteles.onrender.com

Al ingresar al link se verá el mensaje de bienvenida.

- Agregar la siguiente ruta:

`https://proyecto-4-reservas-hoteles.onrender.com/api-docs/`

Se accederá a la interfaz de Swagger.

## Tecnologías usadas

- JavaScript
- Node.js
- Express

## Detalles de la implementación

- Definición de arquitectura de carpetas.

├─ proyecto-4
│ ├─ controllers
│ │ └─ reservaController.js
│ ├─ models
│ │ └─ reserva.js
│ ├─ node_modules
│ ├─ routes
│ │ └─ reservaRoutes.js
│ ├─ .env
│ ├─ .gitignore
│ ├─ index.js
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ swagger.js

- Instalación de dependencias:

	- **cors (v2.8.5)**: CORS es un paquete de Node.js que proporciona un middleware para habilitar CORS (Intercambio de Recursos de Origen Cruzado) en aplicaciones Express. CORS es una especificación de W3C que permite a un servidor relajar las restricciones Same-Origin, que normalmente impiden que los scripts de un origen accedan y manipulen recursos de otro origen.
	
	- **dotenv (v16.4.5)**: Dotenv es una librería de Node.js que permite cargar variables de entorno de un archivo .env en process.env. Esto es útil para ocultar datos sensibles (como claves API, contraseñas de base de datos, etc.) y para manejar configuraciones específicas del entorno.
	
	- **express (v4.19.2)**: Express.js es un framework web para Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones web y móviles. Facilita la construcción de aplicaciones con diversas características, como el enrutamiento, el manejo de solicitudes HTTP, la configuración de middleware, etc.
	
	- **nodemon (v3.1.4)**: Nodemon es una utilidad que monitorea los cambios en el código fuente y reinicia automáticamente el servidor. Es especialmente útil durante el desarrollo, ya que no necesitas detener y reiniciar el servidor cada vez que se haga un cambio en el código.
	
	- **swagger-jsdoc (v6.2.8)**: Swagger JSDoc es una librería de Node.js que permite generar una documentación Swagger (OpenAPI) para la aplicación Express a partir de comentarios JSDoc en el código fuente. Esto facilita la creación y el mantenimiento de la documentación de la API.
	
	- **swagger-ui-express (v5.0.1)**: Swagger UI Express es una librería que permite servir la interfaz de usuario de Swagger desde la aplicación Express. Swagger UI proporciona una interfaz gráfica interactiva para explorar y probar la API basada en la documentación Swagger (OpenAPI) de la API.

- Uso de package.json para establecer el script start.

```
{
  "name": "proyecto-4",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "nodemon": "^3.1.4"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1"
  }
}
```

- Uso de un archivo .env que sirve para indicar las variables de entorno que se necesitan para correr el proyecto.

- Uso de .gitignore para establecer los archivos y carpetas que serán ignorados por el proceso que GIT realiza.

- Uso de index.js como acceso principal.

```
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
```

- Configuración de Swagger

```
//configuración de swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Reservas de Hotel',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'https://proyecto-4-reservas-hoteles.onrender.com/',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
```

- Uso de la ruta ./routes/reservaRoutes.js. En esta, se aplica Swagger para establecer la documentación. Lo que parece que es comentario, no lo es. Es la indicación de que Swagger se ejecute ahí mismo y lea las diferentes rutas con sus controladores.

```
//importación de Express
const express = require('express');

//enrutador de express 
const router = express.Router();

//importación del controlador
const controller = require('../controllers/reservaController');

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
```

- Uso de controlador con ./controllers/reservaController.js

```
//se importa la clase Reserva
const Reserva = require('../models/reserva');

//se crea array vacio para almacenar las reservas
let reservas = [];

//se crea y exporta la función crearReserva
exports.crearReserva = (req, res) => {
    const { hotel, fechaInicio, fechaFin, tipoHabitacion, estado, numHuespedes } = req.body;
    const nuevaReserva = new Reserva({ hotel, fechaInicio, fechaFin, tipoHabitacion, estado, numHuespedes });

    //la nueva reserva se agrega al array reservas
    reservas.push(nuevaReserva);

    //se responde al cliente con el codigo de estado 201 y el objeto de la nueva reserva
    res.status(201).json(nuevaReserva);
};

//se crea y exporta la función obtenerRerservas
exports.obtenerReservas = (req, res) => {
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;
    let result = reservas;

    //filtros de búsqueda
    if (hotel) result = result.filter(r => r.hotel === hotel);
    if (fecha_inicio && fecha_fin) result = result.filter(r => r.fechaInicio >= fecha_inicio && r.fechaFin <= fecha_fin)
        else if (fecha_inicio || fecha_fin) {
            return res.status(400).send('Faltan datos');
        }
    if (tipo_habitacion) result = result.filter(r => r.tipoHabitacion === tipo_habitacion);
    if (estado) result = result.filter(r => r.estado === estado);
    if (num_huespedes) result = result.filter(r => r.numHuespedes === parseInt(num_huespedes));

    // si no se encuentra ninguna reserva, enviar respuesta 404
    if (result.length === 0) {
        return res.status(404).send('Reserva no encontrada');
    }

    //respuesta al cliente de reservas filtradas en formato json
    res.json(result);
};

//se crea y exporta la función obtenerReserva
exports.obtenerReserva = (req, res) => {
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));

    //si la reserva no se encuentra se manda una respuesta 404
    if (!reserva) return res.status(404).send('Reserva no encontrada');

    //si la reserva se encuentra, se manda una respuesta en formato json
    res.json(reserva);
};

//se crea y exporta la función actualizarReserva
exports.actualizarReserva = (req, res) => {

    //búsqueda de reserva por id
    const reserva = reservas.find(r => r.id === parseInt(req.params.id));

    //si la reserva no se encuentra se manda una respuesta 404
    if (!reserva) return res.status(404).send('Reserva no encontrada');

    //actualización de los campos de la reserva
    const { hotel, fechaInicio, fechaFin, tipoHabitacion, estado, numHuespedes } = req.body;
    reserva.hotel = hotel || reserva.hotel;
    reserva.fechaInicio = fechaInicio || reserva.fechaInicio;
    reserva.fechaFin = fechaFin || reserva.fechaFin;
    reserva.tipoHabitacion = tipoHabitacion || reserva.tipoHabitacion;
    reserva.estado = estado || reserva.estado;
    reserva.numHuespedes = numHuespedes || reserva.numHuespedes;

    //se envía la reserva actualizada en formato json
    res.json(reserva);
};

//se crea y exporta la función eliminarReserva
exports.eliminarReserva = (req, res) => {
    const id = parseInt(req.params.id);

    //verificar si la reserva existe antes de eliminarla
    const reservaIndex = reservas.findIndex(r => r.id === id);

    if (reservaIndex === -1) {
        //si no se encuentra la reserva, responder con un código 404
        return res.status(404).send(`Reserva con ID ${id} no encontrada.`);
    }

    //eliminar la reserva del array
    reservas.splice(reservaIndex, 1);

    //se envía una respuesta indicando que la reserva ha sido eliminada
    res.send(`Reserva con ID ${id} eliminada.`);  
};
```

- Uso del modelo ./models/reserva.js

```
//se crea la clase Reserva
class Reserva {

    //contador global para Id
    static currentId = 1;

    constructor({ hotel, fechaInicio, fechaFin, tipoHabitacion, estado, numHuespedes }) {
        this.id = Reserva.currentId++;
        this.hotel = hotel;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.tipoHabitacion = tipoHabitacion;
        this.estado = estado;
        this.numHuespedes = numHuespedes;
    }
}

//se exporta la clase Reserva
module.exports = Reserva;
```

## Contacto

Tomás Wielandt
twielandt16@gmail.com