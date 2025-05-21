var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/enviar", function (req, res) {
    quizController.enviar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    quizController.listar(req, res);
});

module.exports = router;