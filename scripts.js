

const key = "d6c6d4a33ba581c47e0c4eafd3a40842"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.wheather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.wheather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={key}&lang=pt-br&units=metric`).then( resposta => resposta.json())
   
    colocarDadosNaTela(dados)
}
    function cliqueiNoBotao() {
    const cidade = ducoment.querySelector(".input-cidade").value

    buscarCidade(cidade)
}