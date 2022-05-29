let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en el cine")
);
let butacasArreglo: boolean[] = new Array(dimensionArreglo);
let indice,
  resultado: number = 0;

for (indice = 0; indice < butacasArreglo.length; indice++) {
  if (Math.random() < 0.5) {
    console.log("La butaca está ocupada");
  } else {
    console.log("La butaca está vacía");
    resultado++;
  }
}
console.log(`Hay ${resultado} butacas vacías`);
