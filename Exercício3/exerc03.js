// Faça um programa que calcule a seguinte função matemática para uma faixa de valores de 0 à 10, a ser digitada pelo usuário.
//A equação é a seguinte: f(x) = ( 5x + 4 ) / ( 2x + 1). Se o valor for negativo ou maior que 10,
//o sistema deve imprimir uma mensagem dizendo “valor fora da faixa de cálculo permitida”.

let resposta = document.getElementById('resposta')

function calculo(x){
return ( 5 * x + 4 ) / ( 2 * x + 1)
}


function principal(){
    let x = Number(document.getElementById('x').value)
    let fx = 0
    
    resposta.innerHTML = ``

    if(x < 0){
        console.log(`Valor negativo! Valor fora da faixa de cálculo permitida. Digite novamente!`)
        resposta.innerHTML += `Valor negativo! Valor fora da faixa de cálculo permitida. Digite novamente!`
    } else if(x > 10){
        console.log(`Valor maior que 10! Valor fora da faixa de cálculo permitida. Digite novamente!`)
        resposta.innerHTML += `Valor maior que 10! Valor fora da faixa de cálculo permitida. Digite novamente!`
    } else {
        fx = calculo(x)
        
        console.log (` para f(x) = ( 5x + 4 ) / ( 2x + 1) `)
        console.log (` para f(${x}) = ( 5*${x} + 4 ) / ( 2*${x} + 1) = ${fx}`)

        resposta.innerHTML += ` para f(x) = ( 5x + 4 ) / ( 2x + 1) <br>`
        resposta.innerHTML += `para f(${x}) = ( 5*${x} + 4 ) / ( 2*${x} + 1) = ${fx} <br>`

    }
}


