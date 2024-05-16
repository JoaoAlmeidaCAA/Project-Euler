//Função para achar o número primo
function acharNumPrimo (n) {
    const primos = [2];
    let num = 3;

    //Looping para continuar a execução até chegar ao número 10001
    while (primos.length < n) {
        let ePrimo = true;        
        
        //Percorrer o array dos primos para testar se é divisível 
        for (let x = 0; x < primos.length; x++) {
            if (primos[x] * primos[x] > num) {
                break;
            }
            if (num % primos[x] === 0) {
                ePrimo = false;
                break;
            }
        }
        //Se permanecer verdadeiro ápos o loop, significa que é primo, então é adicionado ao array "primos"
        if (ePrimo) {
            primos.push(num);
        }
        num +=2;
    }
    //Retorna o resultado
    return primos[n-1];
}
//Mostra o resultado no console 
console.log(acharNumPrimo(10001));