var express = require("express");
var router = express.Router();

var jogadoresController = require("../controllers/jogadoresController");


router.get("/listarJogadores",  function(req,res){
    jogadoresController.listarJogadores(req,res)
});



router.put("/atualizarVotacaoAdicao", function (req, res) {
   jogadoresController.atualizarVotacaoAdicao(req, res);
});

    

module.exports = router;