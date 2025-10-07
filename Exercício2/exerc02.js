
let resposta = document.getElementById('resposta')

function principal(){         
    let fah = Number(document.getElementById('fah').value)

    let cel = (fah - 32) * 5/9

    console.log(`O valor de Celsius é: ${cel.toFixed(2)}`)
    console.log(`para ${fah} Fahrenheit`)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor de Celsius é: ${cel.toFixed(2)} <br>`
    resposta.innerHTML += `para ${fah} Fahrenheit <br>`
}



