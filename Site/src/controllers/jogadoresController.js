
var jogadoresModel = require("../models/jogadoresModel");

function listarJogadores(req, res) {
    jogadoresModel.listarJogadores()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os jogadores: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function atualizarVotacaoAdicao(){

}

function atualizarVotacaoSub(){

}




module.exports = {
    listarJogadores,
    atualizarVotacaoAdicao,
    atualizarVotacaoSub,

};