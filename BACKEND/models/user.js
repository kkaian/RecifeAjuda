const mongoose = require ("mongoose");

const { Schema } = mongoose;

const serviceSchema = require("./Service")

const userSchema = new Schema ({

name:{
    type: String,
    required: true,
},

age:{
    type: Number,
    required: true,
},

recoins:{
    type: Number,
    required: true,
},

image:{
    type: String,
    required: true,
},

birth:{
    type: Date,
    required: true,
},

cpf:{
    type: Number,
    required: true,
},

email:{
    type: String,
    required: true,
},

cep: {
    type: Number,
    required: true,
},

},{timestamps : true});

const User = mongoose.model("User", userSchema);


module.exports = {
    User,
    userSchema,
};