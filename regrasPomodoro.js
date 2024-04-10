
var mm = 0;
var ss = 0; 

var tempo = 1000; //1000 para segundo
var cron;

var botaoExercicio = document.getElementById('botao_exercicio');
botaoExercicio.style.display = 'none'; // Oculta o botão de reiniciar
    

function start(){
    const ocultaExercicio = document.getElementById('name_exercicio');
    const ocultaDificuldadeExercicio = document.getElementById('dificuldade_exercicio');
    const ocultaDescricaoExercicio = document.getElementById('descricao_exercicio');
    ocultaExercicio.style.display = 'none'
    ocultaDificuldadeExercicio.style.display = 'none'
    ocultaDescricaoExercicio.style.display = 'none'
    botaoExercicio.style.display = 'none'; //ocultando textos do exercício anterior
    
   
cron = setInterval(() => {timer();}, tempo);
const botaoIniciar = document.getElementById('botao_iniciar');
botaoIniciar.disabled = true; //desabilita o botão iniciar enquanto o cronômetro está rodando

}

function pause(){
    
    clearInterval(cron); //pausa o cronômetro
    const botaoIniciar = document.getElementById('botao_iniciar');
    botaoIniciar.disabled = false; //reabilita o botão iniciar

}
function stop(){
    clearInterval(cron); 
    mm = 0;
    ss = 0; 
    document.getElementById('contador').innerText = "00:00" //pausa e zera o cronômetro
    const botaoIniciar = document.getElementById('botao_iniciar');
    botaoIniciar.disabled = false; //reabilita o botão iniciar
}

function timer(){
    ss++; //função para somar os segundos

    if (ss == 60){
        ss = 0;
        mm++; //função para somar os minutos
    }
    var format =(mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss); //função "se" simplificada para concatenar zeros à esquerda no cronômetro
    document.getElementById('contador').innerText = format;
    document.getElementById('fase').innerText = 'Hora de se concentrar!'; //exibir mensagem na tela
    if (mm >= 25){ //tempo do pomodoro
        clearInterval(cron);
        mm = 0;
        ss = 0; 
        document.getElementById('contador').innerText = "00:00" //zera o cronômetro
        document.getElementById('fase').innerText = 'Hora de relaxar e fazer um alongamento!'//exibir mensagem na tela
        playCampainha(); // Chama a função para reproduzir o som da campainha

        const ocultaExercicio = document.getElementById('name_exercicio');
        const ocultaDificuldadeExercicio = document.getElementById('dificuldade_exercicio');
        const ocultaDescricaoExercicio = document.getElementById('descricao_exercicio'); 
        ocultaExercicio.style.display = 'block'
        ocultaDificuldadeExercicio.style.display = 'block'
        ocultaDescricaoExercicio.style.display = 'block'
        botaoExercicio.style.display = 'block'; //exibe os textos do exercício

        var botaoExecutar = document.getElementById('botao_exercicio');
        botaoExecutar.addEventListener('click', start); //exibe o botão para reiniciarS
        exibirExercicio()
        
}}
function playCampainha() {
    var campainhaAudio = document.getElementById('campainha');
    campainhaAudio.play();
}

