/*• Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/

let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en el cine")
);
let butacasArreglo: boolean[] = new Array(dimensionArreglo);
let contarVacias: number = 0;
let contarOcupadas: number = 0;
let i: number = 0;

for (i = 0; i < butacasArreglo.length; i++) {
  butacasArreglo[i] = Boolean(Math.floor(Math.random() * -2 + 2));
}
for (i = 0; i < butacasArreglo.length; i++) {
  if (butacasArreglo[i] === true) {
    console.log("La butaca está ocupada");
    contarOcupadas = contarOcupadas + 1;
  } else {
    console.log("La butaca está vacía");
    contarVacias = contarVacias + 1;
  }
}
console.log(`Hay ${contarOcupadas} butacas ocupadas`);
console.log(`Hay ${contarVacias} butacas vacías`);
