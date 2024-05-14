//Função para calcular a dif. do valor do quadrado da soma e a soma do quadrado. 
function diferencaDeQuadrados(n) {
    
    //Calcular a soma dos quadrados dos primeiros "n" naturais
    let somaDosQuadrados = 0
    for (let x = 1; x <= n; x++) {
        somaDosQuadrados += x * x;
    }

    //Calcular o quadrado da soma dos primeiro "n" naturais
    let quadradoDaSoma = 0;
    for (let x = 1; x <= n; x++) {
        quadradoDaSoma += x;
    }
    quadradoDaSoma = quadradoDaSoma * quadradoDaSoma;

    //Calcular a diferença
    let diferenca = quadradoDaSoma - somaDosQuadrados;

    return diferenca;
}

//Chamando a função para os primeiros 100 números naturais
const resultado = diferencaDeQuadrados(100);

//Mostrar o resultado  no console
console.log("A diferença entre a soma dos quadrados e o quadrado da soma dos 100 primeiros números naturais é:", + resultado);