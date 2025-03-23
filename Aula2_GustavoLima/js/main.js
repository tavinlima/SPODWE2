import { maiuscula, minuscula } from "./funcoes.js";

// a) Função declarada (sintaxe ES5): Altere o tipo de fonte (font-family) de um texto.
const bt1 = document.querySelector(".btn_family");

bt1.addEventListener("click", function () {
    alterarTexto()
})

function alterarTexto() {
    const text = document.querySelector(".title")

    text.style.fontFamily != '"Courier New", Courier, mono' ?
        text.style.fontFamily = '"Courier New", Courier, mono' : text.style.fontFamily = '"Times New Roman"';
}

// b) Função declarada (sintaxe ES6): Altere o tamanho da fonte de um texto.
const alterarTamanhoTexto = () => {
    const text = document.querySelector(".title")
    console.log(window.getComputedStyle(document.body).fontSize)
    text.style.fontSize != '100px' ?
        text.style.fontSize = '100px' : text.style.fontSize = '26px';
}

const bt2 = document.querySelector(".btn_size");

bt2.addEventListener("click", function () {
    alterarTamanhoTexto()
})

// c) Funções Anônimas ou Expressões: Calcule o comprimento da hipotenusa de um triângulo
// retângulo.
var btnHipo = document.querySelector("#calc_hipotenusa")

var result = document.querySelector("#result")
var cat1 = document.querySelector("#cat1")
var cat2 = document.querySelector("#cat2")

btnHipo.addEventListener("click", function () {
    var hipo = Math.hypot(cat1.value, cat2.value)
    result.innerHTML = `Hipotenusa = ${hipo}`
})

// d) Funções Anônimas e Dinâmicas: Mesma funcionalidade da questão anterior.
var btnHipo = document.querySelector("#calc_hipo")

var resultado = document.querySelector("#resultado")

const hipotenusa = new Function("a", "b", "return 'Hipotenusa = '+ Math.hypot(a,b)")

console.log(hipotenusa(2,3))

btnHipo.addEventListener("click", function () {
    alert(hipotenusa(cat1.value,cat2.value))
})

// e) Retorno de Objetos (array indexado): Retorne a cotação de um valor em reais para dólares e
// euros na mesma função.
var real = 10;

var resultCot;

function calcularCotacaoIndex(real) {
    const euro = (real * 6.16)
    const dolar = (real * 5.65)

    resultCot = [euro, dolar]

    return resultCot;
}

calcularCotacaoIndex(real);
console.log(resultCot);
console.log("Real: " + real)
console.log("Euro index: " + resultCot[0])
console.log("Dólar index: " + resultCot[1])

function calcularCotacaoAssociativo(real) {
    const euro = (real * 6.16)
    const dolar = (real * 5.65)

    resultCot = {
        euro: euro,
        dolar: dolar
    }

    return resultCot;
}

// f) Retorno de Objetos (array indexado): Mesma funcionalidade da questão anterior.

calcularCotacaoAssociativo(real)

console.log(resultCot);
console.log("Real: " + real)
console.log("Euro associativo: " + resultCot.euro)
console.log("Dólar associativo: " + resultCot.dolar)



// g) Função Autoinvocada (sintaxe ES5): Calcule a raiz de um número com base em um radicando e
// um índice.
console.log("Função autoinvocada (sintaxe E5 para cáclulo de uma raíz): radicando: 16, indíce: 2, resultado: " + (function (radicando, indice) { return (Math.pow(radicando, 1.0 / indice)) })(16, 2))

// h) Função Autoinvocada (sintaxe ES6): Mesma funcionalidade da questão anterior.
console.log("Função autoinvocada (sintaxe E6 para cáclulo de uma raíz): radicando: 8, indíce: 3, resultado: " + ((radicando, indice) => { return (Math.pow(radicando, 1.0 / indice)) })(8, 3))

// i) Escopo de uma Função (com uso de var na variável dentro da função): Calcule o fatorial de
// um número.
function fatorialComVar(num) {
    var fat;
    for (let index = num; index >= 0; index--) {
        fat=num*(num-1)
    }
    console.log(fat)
}

fatorialComVar(3)
// console.log("Fatorial com uso de var dentro da função: "+fat)

var fator;
// j) Escopo de uma Função (sem uso de var na variável dentro da função): Mesma funcionalidade
// da questão anterior.
function fatorialSemVar(num) {
    for (let index = num; index >= 0; index--) {
        fator=num*(num-1)
    }
    console.log(fator)
}

fatorialSemVar(3)
console.log("Fatorial sem uso de var dentro da função: " + fator)

// k) Closures (função interna chamada dentro da função externa): A função externa deve definir o
// texto “Quem canta “ e a função interna deve concatenar este texto com “seus males espanta.”
// e mostrar o ditado completo em um alert.
const bt3 = document.querySelector("#quemCanta");

function quemCanta() {
    var text = "Quem canta "

    function malesEspanta() {
        alert(text + "seus males espanta")
    }

    malesEspanta()
}

bt3.addEventListener("click", function() {
    quemCanta()
})

// l) Módulos: A aplicação deve ter os botões Maiúsculas e Minúsculas, sendo que cada botão deve
// converter todas as letras de um mesmo texto e exibi-lo em um alert. Os textos devem ser
// convertidos por duas funções exportáveis definidas em um módulo 
var btMaiuscula = document.querySelector("#maiuscula");
var btMinuscula = document.querySelector("#minuscula");

const text = document.querySelector("#textTransformed");

btMaiuscula.addEventListener("click", function () {
    maiuscula(text)
})

btMinuscula.addEventListener("click", function () {
    minuscula(text)
})