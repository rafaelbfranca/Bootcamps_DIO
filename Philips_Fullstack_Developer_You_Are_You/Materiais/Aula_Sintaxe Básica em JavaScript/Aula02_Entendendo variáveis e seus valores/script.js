/*Tipos Primitivos*/
//Boolean
var vouf = false;

//Number
var num = 1;

//String
var nome = "Rafael";

//Function
var funcao = function () {};

var variavel; //Será atribuido valor undefined, pois não foi atribuído nenhum valor inicial.

let variavel2; //Será atribuido valor undefined, pois não foi atribuído nenhum valor inicial.

console.log(typeof(vouf)); //Imprime o tipo da variável no console.
console.log(typeof(num));
console.log(typeof(nome));
console.log(typeof(funcao));
console.log(variavel); //Imprime a variável no console.
console.log(variavel2);

//Ver como declarar arrays e objects

//Variáveis locais e globais
var escopoglobal = "global";
console.log("Variável " + escopoglobal + " chamada fora de blocos.");

function bloco(){
    console.log("Variável " + escopoglobal + " chamada dentro de um bloco.");
    let escopolocal = "local";
    console.log("Variável " + escopolocal + " chamada dentro do seu bloco de escopo."); //Variável local chamada dentro do bloco de escopo. Será impressa no console quando a função for chamada.
}

bloco(); //Chamada da função.

console.log(escopolocal); //Variável local chamada fora do seu bloco de escopo. Será apresentado um erro no console.

/*
Atribuição =
Atribui um valor a uma variável ou a uma constante.
Ex.:
var x = 5
const y = 9

Comparação ==
Verifica se dois valores são iguais mesmo com tipos diferentes.
Ex.:
"0" == 0 , retorna true, pois a string "0" tem o mesmo valor do number 0.
"0" == "1" , retorna false, pois as duas strings possuem conteúdos diferentes.

Comparação idêntica ===
Verifica se dois valores são iguais e de mesmo tipo.
Ex.:
"0" === 0 , retorna false, pois a string "0" tem o mesmo valor do number 0, mas são tipos diferentes.
1 === 1 , retorna true, pois os dois membros possuem valores e tipos iguais.
*/

/*
Operadores aritiméticos:
Soma +
Subtração -
Multiplicação *
Divisão real / -> retorna o quociente
Divisão inteira % -> retorna o resto
Potenciação **

Operadores relacionais:
Maior que >
Menor que <
Maior ou igual a >=
Menor ou igual a <=

Operadores lógicos:
E &&
OU ||
NÃO !
*/
