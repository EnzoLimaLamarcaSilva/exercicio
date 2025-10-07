let resposta = document.getElementById("resposta")

function classificarvoto(idd){
    
    if(idd >= 16 && idd <= 17){
        return 'Voto Facutativo'
    }else if(idd >= 18 && idd <= 70){
        return 'Voto Obrigatório'
    }else if(idd > 70){
        return 'Voto Facutativo'
    }else {
        return 'Dados inválidos! Digite novamente!'
    }

}


function principal(){
    //leitura de dados
    let idd = Number(document.getElementById('idd').value)

    let resultado = classificarvoto(idd)
    

    // imprimir a resposta dos dados
    console.log(idd)
    console.log(resultado)

    resposta.innerHTML = ``
    resposta.innerHTML += `Sua idade é: ${idd} <br>`
    resposta.innerHTML += `você está na classificação: ${resultado} <br>`
    
    
}

principal()