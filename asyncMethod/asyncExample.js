var syncFunc2 = function(){
  console.log("hola asyncrono");
}

function tardado(){
  for(var i = 0; i < 10000; i++){
    var y = i * i;
  }
}

function makeItAsync(f) {
  console.log("antes de tardado");
  tardado();
  console.log("despues de tardado");

  setTimeout(f, 2000);
  console.log("hola syncrono");
}

makeItAsync(syncFunc2);
