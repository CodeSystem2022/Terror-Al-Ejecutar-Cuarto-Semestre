//async no es necesaria en las funciones porque ya son 
//asincronas pero igual proyectan una sincronia visual
//colocandoles el async

async function hola(nombre){
  return new Promise(function(resolve, reject){
    setTimeout( function (){
      console.log('Hola '+nombre);
      resolve(nombre);
    },1000);
  });
}

async function hablar(nombre){
  return new Promise((resolve, reject) =>{
    setTimeout(function (){
      console.log('bla bla bla bla');
      resolve();
    }, 1000);
  });
}

async function adios(nombre, otroCallback){
  return new Promise((resolve, reject) =>{
    setTimeout(function(){
      console.log('Adios '+nombre);
      //resolve();
      //reject('Hay un error');
    },1500);
  });
}


//await solo es valido dentro de una funcion asincrona
//es decir que await siempre tiene que ir con un async
async function main(){
  let nombre = await hola('Valentina');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Termina el proceso...')
}
console.log('Empezamos el proceso...')
main();
console.log('Esta vaa ser la segunda instruccion')