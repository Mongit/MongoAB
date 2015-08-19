var Usuario = function(mongoose) {
    this.mongoose = mongoose.module;
    this.schema = this.mongoose.Schema({
        email: String,
        password: String
    });
    this.model = this.mongoose.model('Usuario', this.schema);
};

Usuario.prototype.create = function (configObj) {
    var that = this;
    return new that.model(configObj);
};

module.exports = Usuario;