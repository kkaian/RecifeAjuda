    const { Service: ServiceModel } = require("../models/Service");

    const serviceController = {

        create: async(req, res) => {

            try {

                const service = { //completar todas as descrições de serviços

                    name: req.body.name,
                    description: req.body.description,
                    image: req.body.image,
                    status: req.body.status,
                    members: req.body.members,
                };

                const response = await ServiceModel.create(service);
                res.status(201).json({response, msg: "serviço criado carai"});

            } catch (error) {
                
                console.log("ocorreu um erro ao processar a requisição: " + error);

            }


        }

    };

    module.exports = serviceController;