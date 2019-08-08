

// console.log(grupos.length);
// console.log(grupos[1][1]);

// a fórmula do IMC é: peso em kg / (altura em metros x altura em metros)

// function calc_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     console.log(imc);
//     return imc;
// }

// // agora podemos rodar a função com os valores que quisermos e assim clacular o IMC:

// var meu_peso = 72;
// var minha_altura = 1.70;

// calc_imc(meu_peso,minha_altura);  // O console mostrará 24.913494809688583

// peso = document.getElementById('peso').innerHTML;
// console.log(peso);
// altura = document.getElementById('altura').innerHTML;
// console.log(altura);

// imc = calc_imc(peso,altura);
// document.getElementById('imc').innerHTML = imc;

//Aula 12 - Arrays

// var alunos = ["João", "Maria", "José"];
// var num_primos = [2, 3, 5, 7, 11, 13];

// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);

// var grupos = [
//     ["João", "Maria"],
//     ["Pedro", "Joana", "André", "Júlio"],
//     ["Carolina", "Helena", "Marcelo"]
// ];

// console.log(grupos.length);
// console.log(grupos[1][1]);

// var cursos = [ "HTML", "Python", "PHP" ];

// cursos.push("Javascript");

// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

// cursos.unshift("Bootstrap");

// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

// cursos.pop();

// console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

// cursos.shift();

// console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
// console.log( alunos.slice(0,3) );

// O console mostrará [ "João" , "Maria", "José" ]

// Aula 13

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de T.I";
// funcionario.cnh = "19852418204984";

// console.log(funcionario);


// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
// ];

// console.log(cursos[1].categorias[0]);
// cursos[2].categorias[1] = "Admnistração de Empresas";
// console.log(cursos[2]);

//Aula 14 - Metodos de Objetos

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function (){
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'idade' : function(){
        var idade = 2019 - this.ano_nasc;
        return idade;
    }
};

console.log(aluno.nome_completo());
console.log('A Idade é: ' + aluno.idade());

console.log(document.getElementById('tudo_obj').innerHTML);