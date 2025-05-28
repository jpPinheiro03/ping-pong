function listar() {
console.log(sessionStorage.ID_USER);
let idUsuario = sessionStorage.ID_USER;

    fetch(`/quiz/listar/${idUsuario}`)
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                obterDadosGrafico(idUsuario)

            document.getElementById("graficos").innerHTML += `
                <div id="grafico${idUsuario}" class="display-none">
                    <h3 class="tituloGraficos">
                        <span id="tituloAquario${idUsuario}">${resposta[0].nome}</span>
                    </h3>
                    <div class="graph">
                        <canvas id="myChartCanvas${idUsuario}"></canvas>
                    </div>
                    <div class="label-captura">
                        <p id="avisoCaptura${idUsuario}" style="color: white"></p>
                    </div>
                </div>
            `

                });
            
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

 


let graficoExibir = document.getElementById(`grafico${idUsuario}`)
        graficoExibir.classList.remove("display-none")
        graficoExibir.classList.add("display-block")

        let btnExibir = document.getElementById(`btnAquario${idUsuario}`)
        btnExibir.classList.remove("btn-white")
        btnExibir.classList.add("btn-pink")




function obterDadosGrafico(idUsuario) {

        fetch(`/quiz/listar/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();

                    plotarGrafico(resposta, idUsuario);

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }


    function plotarGrafico(resposta, idUsuario) {
        console.log('iniciando plotagem do gráfico...');

        let labels = [];

         const dados = {
        labels: [
            'erradas',
            'certas',
        ],
        datasets: [{
            label: 'Quantidade:',
            data: [resposta[0].erradas,],
            backgroundColor: [
                'rgb(255, 99, 99)',
                'rgb(102, 235, 54)',
            ],
            hoverOffset: 4
        }]

    };

        console.log('----------------------------------------------')
        console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
        console.log(resposta)

            labels.push(resposta[0].acertos);
            dados.datasets[0].data.push(resposta[0].acertos);

        

        console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')


        const config = {
            type: 'pie',
            data: dados,
        };

    
            new Chart(
            document.getElementById(`myChartCanvas${idUsuario}`),
            config
        );
    }





function listarEmpunhadura() {
    fetch(`/dash/listarEmpunhadura`)
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    console.log("Dados de empunhadura:", dados);
                    plotarGraficoEmpunhadura(dados[0]);
                });
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

function plotarGraficoEmpunhadura(dados) {
    console.log('Plotando gráfico de empunhadura com os dados:', dados);

    let labels = ['Clássico', 'Caneta', 'Classineta'];
    let valores = [dados.classico, dados.caneta, dados.classineta];

    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de jogadores',
                data: valores,
                backgroundColor: [
                    'rgb(255, 159, 64)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    precision: 0
                }
            }
        }
    };

    console.log('----------------------------------------------')
        console.log('O gráfico será plotado com os respectivos valores:')
        console.log('Labels:')
        console.log(labels)
        console.log('Dados:')
        console.log(dados.datasets)
        console.log('----------------------------------------------')
  
    document.getElementById("graficoEmpunhadura").classList.remove("display-none");
    document.getElementById("graficoEmpunhadura").classList.add("display-block");

    // Criar o gráfico
    new Chart(
        document.getElementById('graficoEmpunhaduraCanvas'),
        config
    );
}