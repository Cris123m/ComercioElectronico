var arreglo = [
    {nombre: 'kevin',
    edad: 25,
    fecha: new Date('1995/02/24'),
    telf: "0999999999"}
]

function crearUsuario (arreglo,usuario,cb){
    var bandera = false; //Esta bandera nos avisará si existe
    arreglo.forEach(element => {
        if (element == usuario){
            bandera=true;//Si encuetre se pone en true
        }
    });
    if (bandera){
        cb({
            mensaje: 'usuario existe',
            arreglo
        })
    }else{
        arreglo.push(usuario);
        cb({
            mensaje: 'usuario ingresado correctamente',
            arreglo
        })
    }
}

var usuario = {nombre: 'jessy',
edad: 22,
fecha: new Date('1997/10/20'),
telf: "0999999998"}

crearUsuario(arreglo,usuario,(respuestaMensaje) => {
    console.log(respuestaMensaje);
})

function editarUsuario(arreglo,usuario,ind,cb){
    arreglo[ind]=usuario;
    cb({
        mensaje: 'usuario a sido cambiado',
        arreglo
    })
}

var usuario2 = {nombre: 'maria',
edad: 28,
fecha: new Date('1992/08/10'),
telf: "0999997998"}

editarUsuario(arreglo,usuario2,1,(respuestaMensaje) => {
    console.log(respuestaMensaje);
})

function eliminarUsuario(arreglo,ind,cb){
    var i = arreglo.indexOf( ind );
    if ( i !== -1 ) {
        arreglo.splice( i, 1 );
        cb({
            mensaje: 'usuario a sido eliminado',
            arreglo
        })
    }else{
        cb({
            mensaje: 'no existe indice',
            arreglo
        })
    }
    
}

eliminarUsuario(arreglo,1,(respuestaMensaje) => {
    console.log(respuestaMensaje);
})

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arreglo, (respuestaMensaje) => {
    console.log(respuestaMensaje);
}) 