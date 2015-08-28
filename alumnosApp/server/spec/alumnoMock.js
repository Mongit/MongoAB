var Alumno = function() {
};
Alumno.errors = [];
Alumno.db = [];
Alumno.setError = function(method, err) {
    Alumno.errors[method] = err;
};
Alumno.getError = function(method) {
    return Alumno.errors[method];
};
Alumno.find = function(callback) {
    callback(Alumno.errors["find"], Alumno.db);    
};
Alumno.findById = function(id, callback) {
    var found = undefined;
    for(var i = 0; i < Alumno.db.length; i++) {
        if(Alumno.db[i].id === id) {
            found = Alumno.db[i];
            break;
        }
    }
    callback(Alumno.errors["findById"], found);
};
Alumno.findByIdAndRemove = function(id, callback) {
    Alumno.findById(id, function(err, found) {
        if(err) return callback(err, found);
        var index = Alumno.db.indexOf(found);
        Alumno.db.splice(index, 1);
        callback(Alumno.errors["findByIdAndRemove"], found);
    });
};
Alumno.prototype.save = function(callback) {
    var index = Alumno.db.indexOf(this);
    if(index === -1)
        Alumno.db.push(this);
    
    return callback(Alumno.errors["save"], this);
};

module.exports = Alumno;