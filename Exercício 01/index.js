// Localizar os multiplos de 3 e 5 abaixo de 1000
let multiplos = [];
for (let x = 1; x < 1000; x++) {
    if ( x % 3 === 0 || x % 5 === 0){
        multiplos.push(x) 
    }
}

// Soma dos multiplos
let soma = multiplos.reduce((acc, curr) => acc + curr, 0);

// Mostrar o resultado no console 
console.log(" A soma dos multiplos de 3 e 5 menores que 1000 é:", soma, "");