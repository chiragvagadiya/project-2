const mongoose = require('mongoose');

const usersschema = new mongoose.Schema({

    id: {type : String},
    firstName:{type : String},
    lastName:{type : String},
    maidenName:{type : String}, 
    age: {type : String},
    gender: {type : String},
    email:{type : String},
    phone: {type : String},
    username: {type : String},
    password: {type : String},
    birthDate:{type : String},
    image: {type : String},
    bloodGroup:{type : String},
    height: {type : String},
    weight:{type : String},
    eyeColor:{type : String},
    hair: {type : String}
});

const users = mongoose.model('users', usersschema);

module.exports = users;