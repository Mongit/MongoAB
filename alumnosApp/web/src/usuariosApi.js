var UsuariosApi = (function() {
    var UsuariosApi = function(usuario) {
        this.usuario = usuario;
    };
    
    UsuariosApi.prototype.findByEmail = function(email, callback) {
        console.log("USUARIOSAPI find by email");
        console.log("email: " + email);
        var that = this;    
        that.usuario.model.find({email: email}, callback);
    };
    
    UsuariosApi.prototype.save = function(body, callback) {
        var that = this;
        var usuario = that.usuario.create(body);
        usuario.save(callback);        
    };
    
    return UsuariosApi;
})();

module.exports = UsuariosApi;