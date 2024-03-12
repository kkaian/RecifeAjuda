const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
const servicesRouter = require("../controllers/serviceController");

router.route("/services").post((req, res) => serviceController.create(req,res)); //criar outros métodos
router.route("/services").get((req, res) => serviceController.get(req, res));

module.exports = router;