var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DependentSchema = new Schema({
    status: String,
    claimNumber: String,
    submittedTo: String,
    claimType: String,
    cost: String,
    submitter: String
});

module.exports = mongoose.model('Dependent', DependentSchema);