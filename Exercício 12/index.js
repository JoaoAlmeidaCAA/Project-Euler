//Função para contar todos os divisores 
function contarDivisores(n) {
    let contar = 0
    for (let x = 1; x <= Math.sqrt(n); x++) {
        if (n % x === 0) {
            if (x === n / x) {
                contar++;
            }
            
            else {
                contar += 2;
            }
        }
    }
    return contar;
}
//Função para gerar números triangulares sequenciais e verifica se tem mais "divisorLimite" divisores usando o "contarDivisores".Até encontrar um número triangular com mais de 500 divisores.
function acharNumTriangular(divisorLimite) {
    let n = 1;
    let numeroTriangular = 1;
    
    while (contarDivisores(numeroTriangular) <= divisorLimite) {
        n++;
        numeroTriangular += n;
    }
    return numeroTriangular;
}
//Mostra o resultado no console
console.log(acharNumTriangular(500));