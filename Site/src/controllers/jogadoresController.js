
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

function atualizarVotacaoAdicao(req, res) {
    const { idJogador } = req.body;

    jogadoresModel.atualizarVotacaoAdicao(idJogador)
        .then(() => res.status(200).send("Voto adicionado"))
        .catch(erro => res.status(500).json(erro));
}

function atualizarVotacaoSub(req, res) {
    const { idJogador } = req.body;

    jogadoresModel.atualizarVotacaoSub(idJogador)
        .then(() => res.status(200).send("Voto removido"))
        .catch(erro => res.status(500).json(erro));
}




module.exports = {
    listarJogadores,
    atualizarVotacaoAdicao,
    atualizarVotacaoSub,

};