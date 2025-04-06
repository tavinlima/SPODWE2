// 1. (10,0 pontos) Implemente programas em JavaScript que realizem as tarefas descritas a seguir:

// a) Testar o operador typeof para os cinco tipos primitivos.
var bool = true;
var numero = 19;
var primTexto = "Textando 123...";
var objNull = null;
var und = undefined;

console.log(typeof bool);
console.log(typeof numero);
console.log(typeof primTexto);
console.log(typeof objNull);
console.log(typeof und);

console.log(objNull === null)


// b) Testar pelo menos dez métodos do tipo String para manipular cadeias de caracteres. Obs.: O
// tipo String possui vários métodos, faça uma pesquisa e implemente no mínimo dez deles.
var textando = "Variavel do tipo string";

console.log(textando.concat(primTexto));
console.log(textando.charAt(2));
console.log(textando.replace("tipo","TIPO"));
console.log(textando.toLocaleUpperCase());
console.log(textando.substring(2,10));
var textSplit = textando.split("")
console.log(textSplit[3] + " " + textSplit[4]);
console.log(textando.includes("Variavel"));
console.log(textando.toLowerCase());
console.log(textando.slice(-8));
console.log(textando.startsWith("do", 9));

// c) Adicionar três novas propriedades para dois objetos diferentes.
var subjetividade = new Object()
subjetividade.caracteristica = "criatividade";
subjetividade.sentimento = "desgosto";
subjetividade.valor = 100;

var musica = {
    duracao :3.3,
    titulo :"A verdade absoluta",
    ano : 2025
}

console.log(subjetividade.caracteristica)
console.log(musica.duracao)

// d) Criar um objeto na forma literal e outro na forma não literal.
var paises = new Object()

paises.nome = "Brasil";
paises.continente = "America do Sul";


var lugares = {
    cidade :"Bonito",
    estado :"Mato Grosso"
}


// e) Criar um array na forma literal e outro na forma não literal.
var objetos = ["Celular", "Relógio", "Fone"]

var artistas = new Array("Gilberto Gil", "Dua Lipa", "Tarsila do Amaral")

// f) Criar uma função na forma literal e outra na forma não literal.
function soma(n1,n2) {
    var soma = n1+n2;
    return soma;
}
console.log(soma(15,2))

var dif = new Function("n1,n2", "return n1-n2")
console.log(dif(9,4))

// g) Criar uma expressão regular na forma literal e outra na forma não literal.
var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = "gusta@email.com"
console.log(emailValido.test(email))

var existeCachorro = new RegExp("cachorro")
var animal = "girafa";

console.log(existeCachorro.test(animal))

animal="cachorro"
console.log(existeCachorro.test(animal))

// h) Testar o acesso a propriedades de um objeto com a notação de colchetes.
console.log(musica["titulo"])

var metodo = "duracao"
//console.log(musica[duracao])

// i) Testar o operador instanceof para os tipos String, Number, Boolean, Function e Array.
var tex = new String("Texas");
var nmb = new Number(2);
var cond = new Boolean(true)
function test() {return "Teste realizao"}
var matriz = [1,2,3,4]

console.log(tex instanceof String)
console.log(nmb instanceof Number)
console.log(cond instanceof Boolean)
console.log(test instanceof Function)

console.log(Array.isArray(matriz))


// j) Criar uma classe Editor contento a propriedade texto (tipo String) e os métodos
// substitui(string, novaString), busca(expressaoRegular) e converteParaMaiusculas().
class Editor{
    constructor(texto) {
        this.texto = texto;
    }

    substitui(string, novaString) {
        return this.texto.replaceAll(string, novaString);
    }

    busca(expressaoRegular) {
        return expressaoRegular.test(this.texto)
    }

    converteParaMaiusculas() {
        return this.texto.toLocaleUpperCase()
    }
}

var editor = new Editor("cachorro quente é 6")

console.log(editor.converteParaMaiusculas())
console.log(editor.substitui("cachorro", "gato"))
console.log(editor.busca(/cachorro/g))
 console.log(editor.busca(/kent/g))

// Obs.: O retorno de cada programa deve ser impresso no console do navegador.