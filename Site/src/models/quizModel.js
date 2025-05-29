var database = require("../database/config");


function enviar(acertos,erradas,idUsuario) {
    console.log("ACESSEI O quiz MODEL - função enviar():", acertos,erradas ,idUsuario);
    
    var instrucaoSql = `
        INSERT INTO quiz (acertos,erradas,tempo,fkusuario) VALUES (${acertos},${erradas},current_timestamp() ,'${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():",idUsuario);
    var instrucaoSql = `
    SELECT acertos,erradas,fkusuario,u.nome,tempo from quiz q inner join usuario u on q.fkusuario = u.id  WHERE fkusuario = '${idUsuario}' ORDER BY tempo desc limit 1 ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviar,
    listar,
};