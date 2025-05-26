var database = require("../database/config");

function listarEmpunhadura() {
    var instrucaoSql = `
        SELECT 
            (SELECT COUNT(empunhadura) FROM usuario WHERE empunhadura = 'Clássico') AS classico,
            (SELECT COUNT(empunhadura) FROM usuario WHERE empunhadura = 'Caneta') AS caneta,
            (SELECT COUNT(empunhadura) FROM usuario WHERE empunhadura = 'Classineta') AS classineta
            from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarEmpunhadura,
};