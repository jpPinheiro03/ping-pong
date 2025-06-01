function favoritar(botao) {
    const idJogador = botao.getAttribute("data-id");

    fetch("/favoritos/atualizarVotacaoAdicao", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ idJogador: idJogador })
    })
    .then(response => {
        if (response.ok) {
            const nome = botao.textContent.split(' ')[1];
            botao.textContent = `Votar novamente em ${nome}`;
        } else {
            alert("Erro ao registrar voto.");
        }
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });
}


