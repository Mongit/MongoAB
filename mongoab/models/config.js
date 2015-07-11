var Config = (function() {
    var Config = function (name, host, port) {
        this.name = name;
        this.host = host;
        this.port = port;
    };
    
    Config.prototype.getConfig = function() {
        var string = "mongodb://"+this.host + "/" + this.name;
        return string;
    };
    
    return Config;
})();

module.exports = function(name, host, port) {
    return new Config(name, host, port);
};