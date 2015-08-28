module.exports = (function() {
    var AccountController = function(express, usuariosApi) {
        this.express = express.module;
        this.usuariosApi = usuariosApi;
        this.router = this.express.Router();
        
        var router = this.router;
        var that = this;
            
        router.post('/login', usuariosApi.findByEmail.bind(usuariosApi));
        
        router.post('/signup', usuariosApi.save.bind(usuariosApi));
    };
    
    return AccountController;
})();