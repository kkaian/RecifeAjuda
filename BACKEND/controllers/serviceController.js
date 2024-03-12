const { model } = require("mongoose");
const { Service: ServiceModel } = require("../models/Service");

const serviceController = {

    create: async (req, res) => {

        try {

            const service = { //completar todas as descrições de serviços

                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                status: req.body.status,
                members: req.body.members,
            };

            const response = await ServiceModel.create(service);
            res.status(201).json({ response, msg: "serviço criado carai" });

        } catch (error) {

            console.log("ocorreu um erro ao processar a requisição: " + error);

        }


    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.json(services);
        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id)


            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            res.json(service)
        } catch (error) {
            console.log(error)

        }
    },

    delete: async (req, res) => {
        try {

            const id = req.params.id
            const service = await ServiceModel.findById(id)

            if (!service) {
                res.status(404).json({ msg: "Serviço não encontrado" });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id)

            res.status(200).json({ deletedService, msg: "Serviço excluído com sucesso" })



        } catch (error) {
            console.log(error)

        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const service = {
            
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            status: req.body.status,
            members: req.body.members
        }

        const updatedService = await ServiceModel.findByIdAndUpdate(id, service)

        if (!updatedService) {
            res.status(404).json({ msg: "Serviço não encontrado" });
            return;
        }

        res.status(200).json({service, msg: "Serviço atualizado com sucesso."})

    }

};

module.exports = serviceController;