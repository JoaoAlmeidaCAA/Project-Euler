//Função para verificar, se o número é divisivel por todos de 1 até 20
function divisivelPorTodos(numero) {
    
    for (let x = 1; x <= 20; x++) {
        if (numero % x !== 0) {
            return false;
        }
    }
    return true;
}

// Looping para descobrir o menor número divisível por todos de 1 até 20
let numero = 1;

while (!divisivelPorTodos(numero)) {
    numero++;
}

console.log("O menor número divisível por todos entre 1 e 20 é", + numero);