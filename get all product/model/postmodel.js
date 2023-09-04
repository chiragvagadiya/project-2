const mongoose = require('mongoose');

const postschema = new mongoose.Schema({
    id: {type : String},
    title: {type : String}, 
    body:  {type : String},
    userId: {type : String} ,
    tags: {type : String} ,
    reactions:  {type : String}
});

const post = mongoose.model('post', postschema);

module.exports = post;