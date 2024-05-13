//Função para verificar, se o número é divisivel por todos de 1 até 20
function divisivelPorTodos(numero) {
    
    for (let x = 1; x <= 20; i++) {
        if (numero % x !== 0) {
            return false;
        }
    }
    return true;
}

