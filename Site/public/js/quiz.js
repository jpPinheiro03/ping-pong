const listaDeQuestoes = [

    {
        pergunta: "Qual é a jogadora número #1 do Rank Mundial?",
        alternativaA: "Sun Yingsha",
        alternativaB: "Chen Meng",
        alternativaC: "Bruna takarashi",
        alternativaD: "Miwa Harimoto",
        alternativaCorreta: "alternativaA"
    },

    {
        pergunta: "Quantos pontos acaba um set Segundo as regras oficiais?",
        alternativaA: "10",
        alternativaB: "12",
        alternativaC: "11",
        alternativaD: "13",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "Quantos tipos de efeitos básicos são possíeveis em um saque?",
        alternativaA: "Dez",
        alternativaB: "Quatro",
        alternativaC: "Cinco",
        alternativaD: "Seis",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "Qual é o nome do jogador intitulado como 'Dragão Chines'",
        alternativaA: "Wang Chunchin",
        alternativaB: "Fan Zhendong",
        alternativaC: "Ma Long",
        alternativaCorreta: "alternativaC"
    },

    {
        pergunta: "Quantos tipos de efeitos básicos são possíeveis em um saque?",
        alternativaA: "Dez",
        alternativaB: "Quatro",
        alternativaC: "Cinco",
        alternativaD: "Seis",
        alternativaCorreta: "alternativaC"
    },

]

// variáveis globais    
let numeroDaQuestaoAtual = 0
let pontuacaoFinal = 0
let tentativaIncorreta = 0
let certas = 0
let erradas = 0
let quantidadeDeQuestoes = listaDeQuestoes.length
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function onloadEsconder() {
    document.getElementById('pontuacao').style.display = "none"
    document.getElementById('jogo').style.display = "none"
}

function iniciarQuiz() {
    document.getElementById('pontuacao').style.display = "flex"
    document.getElementById('jogo').style.display = "flex"
    document.getElementById('btnIniciarQuiz').style.display = "none"

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnSubmeter.disabled = false
    btnProx.disabled = true
    // btnConcluir.disabled = true
    btnFim.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
    if (numeroDaQuestaoAtual === quantidadeDeQuestoes - 1) {
        btnFim.disabled = false;
    } else {
        btnFim.disabled = true;
    }
    habilitarAlternativas(true)
    const questaoAtual = listaDeQuestoes[index]
    numeroDaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option"); // recupera alternativas no html

    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnSubmeter.disabled = true
        btnProx.disabled = false
        btnFim.disabled = false

        habilitarAlternativas(false)

        checarResposta()
    }
}

function habilitarAlternativas(trueOrFalse) {
    let opcaoEscolhida = trueOrFalse ? false : true

    primeiraOpcao.disabled = opcaoEscolhida
    segundaOpcao.disabled = opcaoEscolhida
    terceiraOpcao.disabled = opcaoEscolhida
    quartaOpcao.disabled = opcaoEscolhida

}

function avancar() {
    btnProx.disabled = true
    btnSubmeter.disabled = false

    desmarcarRadioButtons()

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);
} else {
    document.getElementById("btnFim").disabled = false;
}
    
    limparCoresBackgroundOpcoes()
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

    const options = document.getElementsByName("option"); // recupera alternativas no html

    let alternativaCorreta = null // variável para armazenar a alternativa correta

    options.forEach((option) => {
        if (option.value === respostaQuestaoAtual) {
            console.log("alternativaCorreta está no componente: " + alternativaCorreta)
            alternativaCorreta = option.labels[0].id
        }
    })

    // verifica se resposta assinalada é correta
    options.forEach((option) => {
        if (option.checked === true && option.value === respostaQuestaoAtual) {
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            pontuacaoFinal++
            certas++
            document.getElementById("spanCertas").innerHTML = certas
            numeroDaQuestaoAtual++
        } else if (option.checked && option.value !== respostaQuestaoAtual) {
            const wrongLabelId = option.labels[0].id

            document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
            document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
            tentativaIncorreta++
            erradas++
            document.getElementById("spanErradas").innerHTML = erradas
            numeroDaQuestaoAtual++
        }
    })
}

function limparCoresBackgroundOpcoes() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
        document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
    })
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function entrar() {
    if (certas === 0) {
        alert("Você precisa responder ao menos uma questão.");
        return false;
    }

    fetch("/quiz/enviar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            erradasServer: erradas,
            certasServer: certas,
            idUsuario: sessionStorage.ID_USER,
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
    
            document.querySelector("#pontuacaoEJogo").style.display = "none";

            const msg = document.createElement("div");
            msg.innerText = "Envio realizado com sucesso! Redirecionando...";
            msg.style.fontSize = "24px";
            msg.style.fontWeight = "bold";
            msg.style.color = "green";
            msg.style.textAlign = "center";
            document.body.appendChild(msg);

           
            setTimeout(() => {
                window.location = "../pages/dashboards.html";
            }, 2000);
        } else {
            alert("Houve um erro ao tentar enviar os dados!");
        }
    })
    .catch(function (erro) {
        console.error("#ERRO: ", erro);
        alert("Erro ao comunicar com o servidor.");
    });

    return false;
}