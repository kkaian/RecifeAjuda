const mongoose = require ("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema ({ //criar o resto das componentes

name:{
    type: String,
    required: true,
},

description:{
    type: String,
    requirede: true,
},

},{timestamps : true});

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};