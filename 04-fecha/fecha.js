let fechaActual = new Date();

console.log(`Año actual: ${fechaActual.getFullYear()}`);

console.log(`Mes actual: ${fechaActual.getMonth() + 1}`);

let proximoAno = fechaActual.getFullYear() + 1;
let fechaProximoAno = new Date(proximoAno, 0, 1);

console.log(`1 de enero 2025: ${fechaProximoAno}`);
