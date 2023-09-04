var mongoose = require ('mongoose');

var imageschema = new mongoose.Schema({
  image:{
        type:String
    }
});

module.exports = mongoose.model('image',imageschema);