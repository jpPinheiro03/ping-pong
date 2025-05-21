var database = require("../database/config");


function enviar(acertos, idUsuario) {
    console.log("ACESSEI O quiz MODEL - função enviar():", acertos, idUsuario);
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos,tempo,fkusuario) VALUES ('${acertos}',current_timestamp() ,'${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():",idUsuario);
    var instrucaoSql = `
    SELECT acertos,fkusuario,tempo from quiz WHERE fkusuario = '${idUsuario}' ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar,
    listar,
};