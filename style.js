//varialveis let quardando valor dentro delas
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



//funcao de converter as moedas
async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)



    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dolar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

// Essa Funcao e responsavel por trocar a bandeiras e o nomes das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dolar Americano") {
        //inner troca texto
        textoMoedas.innerHTML = " Dolar Americano"
        //troca as bandeiras
        bandeiraMoedas.src = "./img/estados-unidos .png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "euro"
        bandeiraMoedas.src = "./img/Euro.png"
    }

    converterMoedas()
}
// esse evento e quando voce clica no botao ele converte moedas
botao.addEventListener("click", converterMoedas)
// esse evento da troca dos valores ou imagens
select.addEventListener("change", trocaDeMoeda)



