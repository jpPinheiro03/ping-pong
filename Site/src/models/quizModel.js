var database = require("../database/config");

function enviar() {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", acertos);
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos) VALUES ('${acertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar,
};