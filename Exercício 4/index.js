//Verifica se o número é Palíndromo
function palindromo(num) {
    //Converte o número em uma string, inverte a string e verifica se a string original é igual a string invertida
    const strNum = num.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
}

//Define a função
function maiorProdutoPalindromo() {
    let maiorPalindromo = 0;

    for (let x = 100; x < 1000; x++) {
        for( let y = 100; y < 1000; y++) {
            const produto = x * y;
            if (palindromo(produto) && produto > maiorPalindromo) {
                maiorPalindromo = produto
            }
        }
    }
    return maiorPalindromo;
}

//Mostra o resultado no console
console.log("O maior valor palíndromo é", maiorProdutoPalindromo());