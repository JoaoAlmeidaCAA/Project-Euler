//Criação do Array 
function somaPrimos (limite) {
    let ePrimo = new Array(limite + 1).fill(true);
    ePrimo[0] = ePrimo[1] = false;
    
    //Define todos os primos até 2000000
    for (let x = 2; x * x <= limite; x++) {
        if (ePrimo[x]) {
            for (let y = x * x; y <= limite; y += x) {
                ePrimo[y] = false;
            }
        }
    }

    //Soma todos os primos
    let soma = 0;
    for (let x = 2; x <= limite; x++) {
        if (ePrimo[x]) {
            soma += x;
        }
    }
    return soma;
}
//Mostra no console o resultado
console.log(somaPrimos(2000000));