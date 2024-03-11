const mongoose = require ("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema ({

// colocar as propriedades dos serviços/acões sociais
//obs tem que ter status para saber se foi concluida, etc..

},{timestamps : true});

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
    Service,
    serviceSchema,
};