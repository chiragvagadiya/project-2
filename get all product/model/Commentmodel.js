const mongoose = require('mongoose');

const Commentschema = new mongoose.Schema({
    id: {type : String},
    body:  {type : String},
    postId: {type : String} ,
    user: {type : String} 
});

const Comment = mongoose.model('Comment', Commentschema);

module.exports = Comment;