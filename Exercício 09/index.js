//Função da soma dos trios pitagóricos 
function trioPitagorico(soma) {
    
    //Loop com "a" do 1 até menos de 1/3 da soma total
    for (let a = 1; a < soma / 3; a++) {
        
        //Loop com "b" do a+1 até menos da metade da soma total
        for (let b = a + 1; b < soma / 2; b++) {

            //Calcular "c" subtraindo "a" e "b" da soma total 
            let c = soma - a - b;
            if (a * a + b * b === c * c) {
                return { a: a, b: b, c: c, produto: a * b * c };
            }
        }
    }

    //Mensagem de erro se não for encontrado nenhum triângulo pitagórico
    return "Trio não encontrado"
}

//Imprimir o resultado da função, passando 1000 como argumento
const resultado = trioPitagorico(1000);
//Mostrar no console o resultado
console.log(`a: ${resultado.a}, b: ${resultado.b}, c: ${resultado.c}, produto: ${resultado.produto}`);