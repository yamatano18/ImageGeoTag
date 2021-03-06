var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  login: {type:String, required:true},
  password: {type:String, required:true},
  email: {type:String, required:true}
})

var User = module.exports = mongoose.model('User', userSchema);
