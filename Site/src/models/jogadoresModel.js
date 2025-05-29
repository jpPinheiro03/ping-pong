var database = require("../database/config");

function listarJogadores() {
    var instrucaoSql = `
    		SELECT  * FROM jogadores ORDER BY votacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function atualizarVotacaoAdicao(idJogador){
     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",idJogador);
    var instrucaoSql = `
    UPDATE jogadores
    SET votacao = votacao + 1 WHERE id = ${idJogador};
    `;
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function atualizarVotacaoSub(idJogador){
     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",idJogador);
    var instrucaoSql = `
    UPDATE jogadores
    SET votacao = votacao - 1 WHERE id = ${idJogador} ;
    `;
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    listarJogadores,
    atualizarVotacaoAdicao,
    atualizarVotacaoSub,
};