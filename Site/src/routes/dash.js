var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.get("/listarEmpunhadura", dashController.listarEmpunhadura);

module.exports = router;