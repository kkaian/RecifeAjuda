const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
const servicesRouter = require("../controllers/serviceController");

router.route("/services").post((req, res) => serviceController.create(req,res)); //criar outros métodos

module.exports = router;