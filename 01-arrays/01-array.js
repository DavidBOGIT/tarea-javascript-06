let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros[2]); 

numeros.push(11);

numeros.shift(1);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
