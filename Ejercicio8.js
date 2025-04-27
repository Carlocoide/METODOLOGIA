let numeros = [7, 2, 5, 8, 1, 0, 4, 7];

let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(sumaTotal);