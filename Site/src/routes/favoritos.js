var express = require("express");
var router = express.Router();

var jogadoresController = require("../controllers/jogadoresController");


router.get("/listarJogadores", jogadoresController.listarJogadores);

router.push("/atualizarVotacaoAdicao",jogadoresController.atualizarVotacaoAdicao);

router.push("/atualizarVotacaoSub",jogadoresController.atualizarVotacaoSub);




module.exports = router;