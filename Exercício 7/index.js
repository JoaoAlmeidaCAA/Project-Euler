//Função para achar o número primo
function acharNumPrimo (n) {
    let limite = 150000; //Estimativa inicial para o limite superior 
    let primo = Array(limite).fill(true);
    primo[0] = primo[1] = false; //0 e 1 não são primos

    for ( let x = 2; x * x < limite; x++) {
        if (primo[x]) {
            for (let y = x * x; y < limite; y += x) {
                primo[y] = false;
            }
        }
    }

    // Coleta de todos os primos da lista
    let primos = [];
    for (let x = 2; x < limite; x++) {
        if (primo[x]) {
            primos.push(x);
        }
    }

    if (primos.length >= n) {
        return primos[n - 1];
    } else {
        return 'Aumente o limite e tente novamente.';
    }
}

console.log(acharNumPrimo(10000));
