var database = require("../database/config");


function enviar(acertos, idUsuario) {
    console.log("ACESSEI O quiz MODEL - função enviar():", acertos, idUsuario);
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos,tempo,fkusuario) VALUES ('${acertos}',current_timestamp() ,'${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar,
};