function listarEmpunhadura(resposta) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():",resposta);
    var instrucaoSql = `
    SELECT (select count(empunhadura) from usuario where empunhadura = 'Clássico' ),(select count(empunhadura) from usuario where empunhadura = 'Caneta' ), (select count(empunhadura) from usuario where empunhadura = 'Classineta') from usuario ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarEmpunhadura,
};