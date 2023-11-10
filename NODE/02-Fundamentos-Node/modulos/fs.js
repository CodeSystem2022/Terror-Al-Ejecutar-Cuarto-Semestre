const fs = require('fs');

//Primero leemos el archivo.txt
function leer(ruta,cb) {
  fs.readFile(ruta,(err,data) => {
    console.log(data.toString());
  })
  
}

//esto ya no se usa
//leer(__dirname + '/archivo.txt', console.log);
leer(`${__dirname}/archivo.txt`, console.log);//Sintaxis ES6
//con commilla asento no rectas

//Segundo escribimos el archivo1.txt creandolo
function escribir(ruta, contenido,cb) {
  fs.writeFile(ruta,contenido,function(err){
    if (err) {
      console.log('No se ha podido escribir', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
  
}
//Tercero eliminamos el archivo1.txt
function borrar(ruta,cb) {
  fs.unlink(ruta,cb); //elimina de forma async  
}
borrar(`${__dirname}/archivo1.txt`,console.log);

//escribir(`${__dirname}/archivo1.txt`, 'Reescribimos el archivo' ,console.log);
//leer(`${__dirname}/archivo1.txt`, console.log);