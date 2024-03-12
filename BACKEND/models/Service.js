const mongoose = require ("mongoose");

const { Schema } = mongoose;

const user = require("./user").userSchema

const serviceSchema = new Schema ({ //criar o resto das componentes

name:{
    type: String,
    required: true,
},

description:{
    type: String,
    required: true,
},

image:{
    type: String,
    required: true,
},

status:{
    type: Boolean,
    required: true,
},

members:{
    type: [user],
    amount: Number,
    limit: Number,
    required: true,
},


},{timestamps : true});

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};