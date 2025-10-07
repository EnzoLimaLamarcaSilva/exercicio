let resposta = document.getElementById('resposta')

function gerarDesconto(desconto,preco){
    if(preco > 550){
    let totalDesconto = (100 - desconto) / 100
    let precoFinal = totalDesconto * preco
    return precoFinal
}else{
    return preco
}

}

function calcularPreco(qtdVolei, qtdFutebol, qtdBasquete){
let preco = (qtdVolei * 247.58) + (qtdFutebol * 179.57) + (qtdBasquete * 260.89)
return preco

}  



function principal(){
    
    //entrada de dados
    let desconto = 8
    let qtdBasquete = Number(document.getElementById('qtdBasquete').value)
    let qtdVolei = Number(document.getElementById('qtdVolei').value)
    let qtdFutebol = Number(document.getElementById('qtdFutebol').value)

    //processamento e ou cálcuylo => chama de funções
    let valorTotal = calcularPreco(qtdVolei, qtdFutebol, qtdBasquete)
    let valorFinal = gerarDesconto(desconto,valorTotal)
    // saída de dados
    console.log(`O valor de sua compra é: ${valorFinal.toFixed(2)}`)
    

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor de sua compra é: ${valorFinal.toFixed(2)} <br>`
    

}









//1 - Uma loja de artigos esportivos precisa desenvolver um sistema para cálculo do preço de venda que considere o desconto conforme a quantidade vendida.
//Para testar a primeira versão do programa, foi pedido para considerar que se o usuário comprar mais de R$ 550.00, ele ganha um desconto de 8% no preço final
//. Os itens de teste e preços da primeira versão do sistema são do tipo tênis: de vôlei que custa R$ 247.58, de futebol que custa R$ 179.57 e de basquete que custa R$ 260.89,
//respectivamente. Faça um programa que pergunte ao usuário quantos itens ele deseja comprar de cada produto e apresente o valor final de venda, considerando o possível desconto de 8%.