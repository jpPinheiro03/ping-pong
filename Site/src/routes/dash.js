var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");


router.get("/listarEmpunhadura", function (req,res){
    dashController.listarEmpunhadura(req,res)

});


module.exports = router;