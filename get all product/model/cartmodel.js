const mongoose = require('mongoose');

const cartschema = new mongoose.Schema({
    
    title: { type : String},
    price: {type : String},
    quantity: {type : String},
    total: {type : String},
    discountPercentage: {type : String},
    discountedPrice: {type : String}

  });

const cart = mongoose.model('cart', cartschema);
 
module.exports = cart;