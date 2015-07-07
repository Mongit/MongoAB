var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new Schema ({
    name: String,
    phone: Number
});

var Worker = mongoose.model('Worker', schema);

module.exports = function(config) {
    return new Worker(config);
}