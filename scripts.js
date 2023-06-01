

const key = "d6c6d4a33ba581c47e0c4eafd3a40842"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={key}&lang=pt-br`).then( resposta => resposta.json())
   
    colocarDadosNaTela(dados)
}
    function cliqueiNoBotao() {
    const cidade = ducoment.querySelector(".input-cidade").value

    buscarCidade(cidade)
}