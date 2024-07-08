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