/* arreglo uno, multiplique * 2, y me filtrar los pares, usar map y filter
arreglo dos, filter los los impares , sumar + 2 */



var json = {
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            {valor: 1},
            {valor: 4},
            {valor: 2},
            {valor: 24},
            {valor: 100},
            {valor: 23},
            {valor: 45},
            {valor: 23}
        ]
    }
   
}

var arregloUnoMult = json.arreglos.uno
    .map(
        (item) => {
            return item * 2;// Numero multiplicado por 2
        }
    )
var arregloUnoPar = json.arreglos.uno
    .filter(
        (item) => {
            return (item % 2) == 0;//Condicion para ver si un número es par n mod 2 = 0, o n % 2
        }
    )

console.log('Numeros por 2')
console.log (arregloUnoMult);
console.log('Numeros pares filtrados')
console.log (arregloUnoPar);


var arreglo2impar=json.arreglos.dos
    .filter(
        (item) => {
            return (item.valor % 2) == 1;
        }
    )

var arreglosumado=arreglo2impar
        .map(
            (item) => {
                return item.valor+2;
            }
        )

console.log('arreglosumado')
console.log (arreglosumado);