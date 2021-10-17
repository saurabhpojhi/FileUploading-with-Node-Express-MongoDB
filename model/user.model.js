const mongoose = require('mongoose');

const userName = new mongoose.Schema({
    first_name:{ type:String, required:true},
    last_name:{type:String, required:true},
    profile:{type:String, required:false},
});

const user = mongoose.model('user', userName);
module.exports = user;