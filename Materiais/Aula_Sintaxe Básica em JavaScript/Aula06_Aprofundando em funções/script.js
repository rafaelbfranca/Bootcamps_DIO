//Funções declarativas. Precisam ser nomeadas obrigatoriamente.

function funcao() {
    console.log("Essa é uma função declarativa.")
}

funcao();

//Expressões de funções. Podem ser nomeadas ou não.

var func = function(){
    console.log("Mensagem de uma expressão de função.")
}

func();

//Arrow function. Sempre são anônimas e não podem ser nomeadas.

var funct = () => {
    console.log("Mensagem de uma arrow function.");
}

funct();
