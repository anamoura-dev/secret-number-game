let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let secretNumber = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female', {rate:1.0});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p', 'Choose a number between 1 and ' + numeroLimite);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == secretNumber) {
        exibirTextoNaTela('h1', 'Congratulations!');
        let palavraTentativa = tentativas > 1 ? 'attempts' : 'attempt';
        let mensagemTentativas = `You guessed the secret number in ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > secretNumber) {
            exibirTextoNaTela('p', 'The secret number is lower than ' + chute);
        } else {
            exibirTextoNaTela('p', 'The secret number is higher than ' + chute);
        }
        tentativas++;
        limparCampo();
    }

    console.log(chute == secretNumber);
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    secretNumber = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}