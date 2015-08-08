var f = function(nombre) {
    console.log("Hola " + nombre + " " + new Date().toString());
};

var sincrono = function(nombre, callback) {
    callback(nombre);
};

var async = function(nombre, callback) {
    process.nextTick(function(){
        callback(nombre);
    });
};

var async2 = function(nombre, callback) {
    setTimeout(function(){
        callback(nombre);
    }, 1000);
};

async("pedro", f);
async2("chencho", f);
sincrono("lola", f);