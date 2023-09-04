const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    
    title: { type : String},
    price: {type : String} ,
  });

const product = mongoose.model('product', productschema);
 
module.exports = product;