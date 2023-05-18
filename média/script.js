var form = document.getElementById("formulario")
var nota1 = document.getElementById("nota1")
var nota2 = document.getElementById("nota2")
var nota3 = document.getElementById("nota3")
var nota4 = document.getElementById("nota4")
var nota5 = document.getElementById("nota5")
var texto = document.getElementById("texto")

var form2 = document.getElementById("formulario2")
var pnota1 = document.getElementById("p-nota1")
var pnota2 = document.getElementById("p-nota2")
var pnota3 = document.getElementById("p-nota3")
var pnota4 = document.getElementById("p-nota4")
var pnota5 = document.getElementById("p-nota5")
var peso1 = document.getElementById("peso1")
var peso2 = document.getElementById("peso2")
var peso3 = document.getElementById("peso3")
var peso4 = document.getElementById("peso4")
var peso5 = document.getElementById("peso5")
var texto2 = document.getElementById("texto2")

var ponderar = document.getElementById('media-p')
var art = document.getElementById('ma')
var pon = document.getElementById('mp')
var aritmetica = document.getElementById("media-a")

ponderar.style.display = 'none'

function mediaAritmetica(event) {
    event.preventDefault()

    var ma = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value) + parseFloat(nota5.value)
    var result = ma / 5

    if (result >= 7) {
        texto.innerHTML = "Aprovado, com a média de: " + result.toFixed(2)
    }
    else if (result >= 5 && result <= 6.9) {
        texto.innerHTML = "De exame, com a média de: " + result.toFixed(2)
    }
    else if (result < 5) {
        texto.innerHTML = "Reprovado, com a média de: " + result.toFixed(2)
    }
}
form.addEventListener("submit", mediaAritmetica)

function mediaPonderada(event) {
    event.preventDefault()

    var x1 = parseFloat(pnota1.value)*parseFloat(peso1.value)
    var x2 = parseFloat(pnota2.value)*parseFloat(peso2.value)
    var x3 = parseFloat(pnota3.value)*parseFloat(peso3.value)
    var x4 = parseFloat(pnota4.value)*parseFloat(peso4.value)
    var x5 = parseFloat(pnota5.value)*parseFloat(peso5.value)


    var mp = x1 + x2 + x3 + x4 + x5
    var result2 = mp /(parseFloat(peso1.value) + parseFloat(peso2.value) + parseFloat(peso3.value) + parseFloat(peso4.value) + parseFloat(peso5.value))

    if (result2 >= 7) {
        texto2.innerHTML = "Aprovado, com a média de: " + result2.toFixed(2)
    }
    else if (result2 >= 5 && result2 <= 6.9) {
        texto2.innerHTML = "De exame, com a média de: " + result2.toFixed(2)
    }
    else if (result2 < 5) {
        texto2.innerHTML = "Reprovado, com a média de: " + result2.toFixed(2)
    }
}
form2.addEventListener("submit", mediaPonderada)

art.addEventListener('click', () => {
    ponderar.style.display = 'none'
    aritmetica.style.display = 'block'
})

pon.addEventListener('click', () => {
    ponderar.style.display = 'block'
    aritmetica.style.display = 'none'
})