function listar() {
console.log(sessionStorage.ID_USER);
let idUsuario = sessionStorage.ID_USER;

    fetch(`/quiz/listar/${idUsuario}`)
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        } else {
            alert("Houve um erro ao tentar puxar os dados!");
        }
    })
    .catch(function (erro) {
        console.error("#ERRO: ", erro);
        alert("Erro ao comunicar com o servidor.");
    });

    return false;
}