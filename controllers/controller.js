//se crea array vacio para almacenar las reservas
let reservas = [];

//se crea y exporta la función crearReserva
exports.crearReserva = (req, res) => {
    const { hotel, fechaInicio, fechaFin, tipoHabitacion, estado, numHuespedes } = req.body;
    const nuevaReserva = {
        id: reservas.length + 1,
        hotel,
        fechaInicio,
        fechaFin,
        tipoHabitacion,
        estado,
        numHuespedes,
    };

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

    //se filtra las reservas para eliminar una reserva en especifico según su id
    reservas = reservas.filter(r => r.id !== parseInt(req.params.id));

    //se envía una respuesta indicando que la reserva a sido eliminada
    res.send(`Reserva con ID ${req.params.id} eliminada.`);
};