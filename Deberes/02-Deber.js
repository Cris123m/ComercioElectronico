/* 1. - DEBER : Inveritr la  PALABRA='COMERCIO ELECTRONICO'
2. - DEBER:
UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas
TEXTO:
Realiza fotografías de 20 megapíxeles y
puede utilizar un perfil de color Dlog-M
de 10 bits, con el que se obtiene un rango
dinámico más amplio al registrar hasta mil millones de
colores. Esto queda bastante por encima de los 16 millones de
colores de los perfiles de 8 bits, pudiendo dejar más margen y
libertad en la edición posterior del material.
Por su parte, el Mavic 2 Zoom cuenta con
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.
En este caso es capaz de realizar capturas de 12 megapíxeles,
disponiendo un zoom automático híbrido (que combina detección de fase y contraste)
de una función de "Superresolución" que recurre al zoom óptico para realizar nueve
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle). */

var ArregloPalabra = 'COMERCIO ELECTRÓNICO' //Palabra original

var ArregloPalabraInvertida = '' //Aqui se guardará la palabra/s invertida

var ArregloTamanoPalabra = ArregloPalabra.length //Determinamos el tamaño del String

console.log(ArregloTamanoPalabra)

while (ArregloTamanoPalabra>=0) { //Ejecuta mientras el valor del tamaño sea mayor o igual a 0
    ArregloPalabraInvertida = ArregloPalabraInvertida + ArregloPalabra.charAt(ArregloTamanoPalabra) //guardamos los carácteres desde el último al primero
    ArregloTamanoPalabra-- //Disminuye el tamaño de uno en uno en el bucle

}
console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('-------- Palabra Invertida --------')


console.log(ArregloPalabraInvertida) //Imprimimos el resultado

var ArregloParrafo = 'Realiza fotografías de 20 megapíxeles y \
puede utilizar un perfil de color Dlog-M \
de 10 bits, con el que se obtiene un rango \
dinámico más amplio al registrar hasta mil millones de \
colores. Esto queda bastante por encima de los 16 millones de \
colores de los perfiles de 8 bits, pudiendo dejar más margen y \
libertad en la edición posterior del material.\
Por su parte, el Mavic 2 Zoom cuenta con \
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.\
En este caso es capaz de realizar capturas de 12 megapíxeles, \
disponiendo un zoom automático híbrido (que combina detección de fase y contraste) \
de una función de "Superresolución" que recurre al zoom óptico para realizar nueve \
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'  

function ArrayPrimeraPalabra(ArregloParrafo) {
    var pSeparado = ArregloParrafo.split(" ") //Separamos las palabras por medio de los espacios
    var ArregloPrimeraPalabra = pSeparado[0] //Obtenemos la primera palabra
    return ArregloPrimeraPalabra.toUpperCase() //Convertimos la palabra en mayúsculas
}

console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('-------- Primera palabra ----------')
console.log(ArrayPrimeraPalabra(ArregloParrafo))

function ArrayPalabradelMedio(ArregloParrafo) {
    var pSeparado = ArregloParrafo.split(" ") //Separamos las palabras por medio de los espacios
    var ArregloTamanoArray = pSeparado.length //Obtenemos el tamaño del array
    var ArreglopalabradelMedio = '' //Variable donde guardaremos la palabra
    if (ArregloTamanoArray % 2 == 0) { //Condición Si el número de palabras es par
        var ArreglonumMedio = ArregloTamanoArray/2 //Dividimos el tamaño para 2
        ArreglopalabradelMedio = pSeparado[ArreglonumMedio -1] + " " + pSeparado[ArreglonumMedio] //Al no haber palabra intermendia obtenemos las 2 centrales
    } else{ //Caso contrario, número impar de palabras
        var ArreglonumMedio = Math.trunc(ArregloTamanoArray/2) //Dividimos el tamaño para 2 y con Math.trunc obtenemos solo la arte entera
        ArreglopalabradelMedio = pSeparado[ArreglonumMedio] //La palabra de en medio por el número medio
    }
    return ArreglopalabradelMedio.toUpperCase() //Convertimos la palabra a mayúsculas
}

console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('-------- Palabra del Medio --------')
console.log(ArrayPalabradelMedio(ArregloParrafo))

function ArrayUltimaPalabra(ArregloParrafo) {
    var pSeparado = ArregloParrafo.split(" ") //Separamos las palabras por medio de los espacios
    var ArregloTamanoArray = pSeparado.length //Obtenemos el tamaño del array
    var ArregloUltimaPalabra = pSeparado[ArregloTamanoArray-1] //Obtenemos la última palabra por su índice que es el tamaño -1
    return ArregloUltimaPalabra.toUpperCase() //Convertimos la palabra a mayúsculas
}

console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('-------- Última Palabra -----------')
console.log(ArrayUltimaPalabra(ArregloParrafo))

function contadorPuntos(ArregloParrafo) { //Función para contar puntos
    var pSeparado = ArregloParrafo.split(".") //Separamos las palabras por medio de los puntos
    var ArregloTamanoArray = pSeparado.length //Obtenemos el tamaño del array
    return ArregloTamanoArray-1 //En este caso los puntos van a hacer el número de divisiones - 1
}

console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('------- Contador de puntos --------')
console.log(contadorPuntos(ArregloParrafo))

function contadorComass(ArregloParrafo) { //Función para contar comas
    var pSeparado = ArregloParrafo.split(",") //Separamos las palabras por medio de los puntos
    var ArregloTamanoArray = pSeparado.length //Obtenemos el tamaño del array
    return ArregloTamanoArray-1 //En este caso los comas van a hacer el número de divisiones - 1
}

console.log('-----------------------------------')
console.log('-----------------------------------')
console.log('-------- Contador de comas --------')
console.log(contadorComass(ArregloParrafo))      