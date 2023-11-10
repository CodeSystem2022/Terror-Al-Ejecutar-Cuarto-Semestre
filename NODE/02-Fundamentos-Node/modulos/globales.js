/*
// this === global = true
// Mostrar algo en consola
console.log();

//Mensaje en forma de error
console.error();

//Ejecutar un codigo luego de un intervalo de tiempo
setTimeout(()=>{});

//Ejecutar un codigo cada intervalo de tiempo
setInterval(()=>{});

SetImmediate(()=>{});
*/

//console.log(setInterval);
/*
let i = 0;
let intervalo = setInterval(()=>{
  console.log('Hola');
  if (i===3) {
    clearInterval(intervalo); //detenemos la funcion
  }
  i++;
},1000);
*/

setImmediate(()=>{
  console.log('Saludo inmediato');
});

//console.log(process);

console.log(__dirname);//muestra el directorio donde estamos trabajando
console.log(__filename);//el archivo tmb donde estamos trabajando

global.miVariable = 'mi variable global';
console.log(miVariable);