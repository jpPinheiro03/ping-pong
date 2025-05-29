var express = require("express");
var router = express.Router();

var jogadoresController = require("../controllers/jogadoresController");


router.get("/listarJogadores", jogadoresController.listarJogadores);

router.put("/atualizarVotacaoAdicao", jogadoresController.atualizarVotacaoAdicao);

router.put("/atualizarVotacaoSub", jogadoresController.atualizarVotacaoSub);




module.exports = router;