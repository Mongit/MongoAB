module.exports = (function() {
    var AccountController = function(express, usuariosApi, moment, jwt) {
        this.express = express.module;
        this.usuariosApi = usuariosApi;
        this.router = this.express.Router();
        this.moment = moment.module;
        this.jwt = jwt.module;
        
        var router = this.router;
        var that = this;
            
        router.post('/login', function(req, res, next) {
            console.log("ACCCOUNT CONTROLKER");
            
            that.usuariosApi.findByEmail(req.body.email, function(err, user) {
                if(err) {
                    return next(err);
                }
                console.log("req.body");            
                console.dir(req.body);
                console.log("user");            
                console.dir(user);
                //console.dir(user);
                if (!user) {
                    console.log("!user");
                    // incorrect username
                    return res.sendStatus(401);
                }

                if (!user.password === req.body.password) {
                    
                    console.log("!pwd != pwd");
                    // incorrect password
                    return res.sendStatus(401);
                }
                 
                console.log("both are in db")
                var expires = that.moment().add(1, 'minutes').valueOf();
                var token = that.jwt.encode({
                    iss: user.email,
                    exp: expires
                }, 'cualquiera');

                res.json({
                    token : token,
                    expires: expires,
                    user: user
                });
            });
        });
        
        router.post('/signup', function(req, res, next) {
            
                        
            usuariosApi.save(req.body, function(err, usuario){
                
                if(err) return next(err);
                res.json({success: true});       
            });
        });
        
    }
    
    return AccountController;
})();