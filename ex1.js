//exercicio 1

//1
console.log("----")

console.log("O arquivo 'ex1.js' está funcionando");

//2
console.log("----")

var nome = "Alexandre Salomão";
var idade = "23";

console.log("Olá, eu me chamo " + nome + ", tenho " + idade + " anos e estou estudando Javascript");

//3
console.log("----")

var aluno = "Pedro";
var matricula = "D20EFE-2";

var p1 = 10;
var p2 = 9;
var media = (p1 + p2) / 2;

console.log ("O aluno " + aluno + ", matrícula " + matricula + " , obteve a média final " + media);

//4
console.log("----")

var celular = "974042569";
console.log(celular.length == 9);

//5
console.log("----")

console.log(Math.pow(32,6));

//6 
console.log("----")

console.log("typeof - Não é permitido pois é uma palavra reservada");
console.log("nome-usuario - Não é permitido utilizar traço, apenas underline");
console.log("2a_tentativa - Não é permitido iniciar uma variavel com número");
console.log("nome completo - Não é permitido criar variavel com espaço");

//7
console.log("----")

var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); //2525 pois é string e sera concatenado.
console.log( (7+5) / numero + 2 ); //4 
console.log(pressao); //undefined
console.log(temperatura); //null
console.log(typeof pressao); //undefined
console.log(typeof temperatura); //object

//8
console.log("----")

var idade = 65;

    console.log(idade != 65); // false
    console.log(idade >= 65);  // true
    console.log("65" == idade); //true
    console.log(65 !== idade); //false
    console.log(typeof (idade > 60)); //boolean
    console.log(typeof (idade > 70)); //boolean

    