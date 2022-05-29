let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en el cine")
);
let butacasArreglo: boolean[] = new Array(dimensionArreglo);
let indice: number = 0;
let resultadoFalse: number = 0;
let resultadoTrue: number = 0;

for (indice = 0; indice < butacasArreglo.length; indice++) {
  if (Math.random() < 0.5) {
    console.log("La butaca está ocupada");
    resultadoTrue++;
  } else {
    console.log("La butaca está vacía");
    resultadoFalse++;
  }
}
console.log(`Hay ${resultadoTrue} butacas ocupadas`);
console.log(`Hay ${resultadoFalse} butacas vacías`);
