    const { Service: ServiceModel } = require("../models/Service");

    const serviceController = {

        create: async(req, res) => {

            try {

                const service = { //completar todas as descrições de serviços

                    name: req.body.name,
                    description: req.body.description,

                };

                const response = await ServiceModel.create(service);
                res.status(201).json({response, msg: "serviço criado carai"});

            } catch (error) {
                
                console.log(error);

            }


        }

    };

    module.exports = serviceController;