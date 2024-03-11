const mongoose = require ("mongoose");

const { Schema } = mongoose;

const serviceSchema = require("./Service")

const userSchema = new Schema ({

// colocar as propriedades do usuários

},{timestamps : true});

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema,
};