//exercicio 1

num1 = document.getElementById("num_1").innerHTML;
num2 = document.getElementById("num_2").innerHTML;
valor1 = parseInt(num1);
valor2 = parseInt(num2);
resultado = valor1 + valor2;
document.getElementById("resultado").innerHTML = '<strong>' + resultado + '</strong>';

//exercicio 2

vl_temp = document.getElementById('caixa_azul').innerHTML;
temperatura = parseInt(vl_temp);

function calcula_temperatura(celcius) {
    var F = (9 * celcius / 5) + 32;
    return F;
}
var resultado = document.getElementById('caixa_amarela').innerHTML = calcula_temperatura(temperatura);

//exercicio 3

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];
//slice, captura os dois ultimos itens do array
var nv_grupos = grupos.slice(-2);
//adiciona na ultima posição do array.
nv_grupos.push(['Mariana', 'Felipe', 'Carla']);

//exercicio 4   

//A
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function () {
        var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        return t_aval;
    },
    'media_aval': function () {
        var m_aval = ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (this.n_aval_1_estrela)) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + (1 * this.n_aval_1_estrela));
        return m_aval;
    }
}

curso_p = curso.categoria[0];
document.getElementById('categoria_principal').innerHTML = curso_p;
//B

var total_av = curso.total_aval();
var media_av = curso.media_aval().toFixed(1);

document.getElementById('total_aval').innerHTML = total_av;
document.getElementById('media_aval').innerHTML = media_av;

//exercicio 5

var pessoa = {
    'nome': 'Alexandre',
    'sobrenome': 'Salomão',
    'email': 'alexandresalomao@g1.com.br'
}
function tabela_pessoa(obj_pessoa) {
    nome_pessoa = obj_pessoa.nome;
    sobrenome_pessoa = obj_pessoa.sobrenome;
    email_pessoa = obj_pessoa.email;
    nome_completo = nome_pessoa + " " + sobrenome_pessoa;

    tabelaHTML = '<div class="tableBox">'
        + '<table>'
        + '<tr>'
        + '<th>' + 'Nome Completo' + '</th>'
        + '<th>' + 'E-mail' + '</th>'
        + '</tr>'
        + '<tr>'
        + '<td>' + nome_completo + '</td>'
        + '<td>' + email_pessoa + '</td>'
        + '</tr>'
        + '</table>'
        + '</div>';

    return tabelaHTML;
}
var tabela = tabela_pessoa(pessoa);
document.getElementById('tabela').innerHTML = tabela;