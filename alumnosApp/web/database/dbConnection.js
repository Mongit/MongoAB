var DbConnection = function (mongoose) {
    this.mongoose = mongoose.module;
}

DbConnection.prototype.connect = function (connectionString) {
    this.mongoose.connect(connectionString);
    var db = this.mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log('Conectado a alumnosDB');
    });    
}

module.exports = DbConnection;

