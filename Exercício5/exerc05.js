//Gasolina: R$ 6.14
//Álcool: R$ 4.13

let resposta = document.getElementById('resposta')

function gasolina(litros){
if ( litros >= 0 && litros <= 20){
    return litros * 6.14 * 0.98
}else{
    return  litros * 6.14 * 0.96
}
}
function alcool(litros){
    if ( litros >= 0 && litros <= 20){
        return litros * 4.13 * 0.97
    }else{
        return  litros * 4.13 * 0.95
    }
}



function principal(){
    let tipo = document.getElementById('tipo').value
    let litros = document.getElementById('litros').value
    let preco = 0
    
    resposta.innerHTML = ``

    if(tipo === "G"){
        preco =  gasolina(litros)
        console.log(`O preço total da gasolina é ${preco.toFixed(2)} para ${litros} litros`)
        resposta.innerHTML += `O preço total da gasolina é ${preco.toFixed(2)} para ${litros} litros <br>`
    }else if (tipo === "A"){
        preco =  alcool(litros)
        console.log(`O preço total do álcool é ${preco.toFixed(2)} para ${litros} litros`)
        resposta.innerHTML += `O preço total do álcool é ${preco.toFixed(2)} para ${litros} litros <br>`
    }else{
        console.log(`Tipo de combustível inválido!`)
        resposta.innerHTML += `Tipo de combustível inválido!`
    }


}
