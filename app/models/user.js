var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    password: String,
    employeeid: String,
    insurancePending: String,
    trainingsPending: String,
    approvalsPending: String,
    timesheetPending: String,
    genPending: String

});

module.exports = mongoose.model('User', UserSchema);