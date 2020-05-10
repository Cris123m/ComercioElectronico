const EventEmitter = require('events')

class entrarALaCasa extends EventEmitter { }

const entrarCasa = new entrarALaCasa()
var nombreEvento = 'entrar por la puerta de adelante hola'
// evento que escucha
// ON
entrarCasa.on(nombreEvento, (nombre) => {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
})

// evento que emite
// EMIT
entrarCasa.emit(nombreEvento, 'kevin')

