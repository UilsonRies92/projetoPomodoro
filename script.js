let listaExercicios = []; //armazena os exercícios da API
let exercicioAtual = 0; //número do exercício inicial
let offset = 0; //offset inicial

function exibirExercicio() {
    
    if (exercicioAtual === listaExercicios.length - 1) {
        if (listaExercicios.length % 10 === 0) {
            offset += 10;
            getExercises(); //pega novos exercícios assim que concluído o array
        } else {
            alert("Não há mais exercícios disponíveis.");
            return; //exibe alerta caso tenha acabado a lista de exercícios da API
        }
    }
  
    const nameExercicio = document.getElementById('name_exercicio');
    const dificuldadeExercicio = document.getElementById('dificuldade_exercicio');
    const descricaoExercicio = document.getElementById('descricao_exercicio');

    nameExercicio.innerText = listaExercicios[exercicioAtual].name;
    dificuldadeExercicio.innerText = listaExercicios[exercicioAtual].difficulty;
    descricaoExercicio.innerText = listaExercicios[exercicioAtual].instructions;

    exercicioAtual++;
}

function getExercises() {
    fetch(`https://api.api-ninjas.com/v1/exercises?type=stretching&offset=${offset}`, {
        method: 'GET', 
        headers: { 'X-Api-Key': 'insira_aqui_sua_apiKey'},
        contentType: 'application/json', //busca os exercícios da API
    })
    .then(response => response.json()) 
    .then(dados => {
        listaExercicios = dados;
        exercicioAtual = 0;
        
        localStorage.setItem('exercicios', JSON.stringify(listaExercicios)); // Transforma os dados da API e armazena no localStorage
        
        console.log(dados); // apenas para controle
    })
    .catch(error => console.log(error)); //exibir erros no console
}

getExercises();





