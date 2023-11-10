function hola(nombre, miCallback){
  setTimeout( function (){
    console.log('Hola '+nombre);
    miCallback(nombre);
  },1000); 
}

function hablar(callcackHablar){
  setTimeout(function (){
    console.log('bla bla bla bla');
    callcackHablar();
  }, 1000);
}

function adios(nombre, otroCallback){
  setTimeout(function(){
    console.log('Adios '+nombre);
    otroCallback();
  },1500);
}
//Funcion recursiva
function conversacion(nombre, veces, callback){
  if (veces > 0) {
    hablar( function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre, callback);
  }
}

//---Proceso Principal---//
console.log('Iniciando proceso...')
hola('Valentina',function(nombre){
  conversacion(nombre, 4, function(){
    console.log('Terminando el proceso...')
  });
});
/*
console.log('Iniciando el proceso...');
hola('Carlos', function(nombre){
  hablar(function(){
    hablar(function(){
      hablar(function(){
        hablar(function(){
          adios(nombre, function(){
            console.log('Termianndo el proceso...');
          });
        });
      });
    }); 
  });
});
*/