var quizModel = require("../models/quizModel");


function enviar(req,res) {
    var acertos = req.body.certasServer;

        quizModel.enviar(acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    enviar,
}