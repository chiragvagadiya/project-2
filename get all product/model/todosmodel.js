const mongoose = require('mongoose');

const todoschema = new mongoose.Schema({
    
    title: { type : String},
    price: {type : String},
    quantity: {type : String},
    total: {type : String},
    discountPercentage: {type : String},
    discountedPrice: {type : String}

  });

const todo = mongoose.model('todo', todoschema);
 
module.exports = todo;