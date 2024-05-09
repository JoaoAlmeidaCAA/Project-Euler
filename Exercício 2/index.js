//Calcular a soma dos números pares 
function fibonacci(limit) {
    let sum = 0;
    let prev =  1;
    let curr = 1;

    //Looping até atingir o limite 
    while(curr <= limit) {
        // Verifica se o número é par e o adiciona a soma
        if (curr % 2 === 0) {
            sum += curr;
        }
    //Faz o calculo do próximo numero da sequência e os atualiza
    let next = prev + curr;
    prev = curr;
    curr = next;
    }
    return sum;
}

// Define o limite
const limit = 4000000;
const result = fibonacci(limit);

//Exibir resultado no console
console.log ("A soma de todos os números pares de Fibonacci até " + limit + " é " + result);