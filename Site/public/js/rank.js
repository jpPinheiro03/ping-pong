

function listarJogadores() {
    fetch(`/favoritos/listarJogadores`)
        .then(res => res.json())
        .then(dados => {
            const container = document.getElementById("rank");
            container.innerHTML = "";
            container.innerHTML += `
    <div class="rank-header">
        <span>Nome</span>
        <span>Ranking</span>
        <span>País</span>
        <span>Pontos</span>
        <span>Votação</span>
    </div>
`;


            dados.forEach(jogador => {
                container.innerHTML += `
                    <div class="linha">
                        <span><strong>Nome:</strong> ${jogador.nome}</span>
                        <span><strong>Ranking:</strong> #${jogador.ranking}</span>
                        <span><strong>País:</strong> ${jogador.pais}</span>
                        <span><strong>Pontos:</strong> ${jogador.pontos}</span>
                        <span><strong>Votação:</strong> ${jogador.votacao}</span>
                    </div>
                `;
            });
        })
        .catch(erro => {
            console.error("Erro:", erro);
            alert("Erro ao carregar os dados.");
        });

}

listarJogadores();
setInterval(listarJogadores, 60000);





