//Função para encontrar o maior fator primo de um número
function maiorNprimo(number) {
    let divisor = 2;
    while (number > 1) {
        if (number % divisor ===0) {
            number /= divisor;
        }
        else{
            divisor++;
        }
    }
    return divisor;
}

//Encontrar o maior fator primo do número 
const number = 600851475143;
const maiorFator = maiorNprimo(number);

//Mostrar o resultado no console
console.log("O resultado é", maiorFator);