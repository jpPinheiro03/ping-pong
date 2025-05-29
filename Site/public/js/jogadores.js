function favoritar(botao) {
    const idJogador = botao.getAttribute("data-id");
    const favoritado = botao.getAttribute("data-favoritado") === "true";

const rota = favoritado
    ? "http://localhost:3333/favoritos/atualizarVotacaoSub"
    : "http://localhost:3333/favoritos/atualizarVotacaoAdicao";

    fetch(rota, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ idJogador: idJogador })
    })
    .then(response => {
        if (response.ok) {
            const nome = botao.textContent.split(' ')[1];
            botao.textContent = favoritado ? `Favoritar ${nome}` : `Desfavoritar ${nome}`;
            botao.setAttribute("data-favoritado", (!favoritado).toString());
        } else {
            alert("Erro ao atualizar voto.");
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
}





