var time1 = 0;
var time2 = 1;
var placar = 0;
if(time1>time2){
    placar = 1;
}
else if(time1<time2){
    placar = 2;
}

//if
console.log("if simples - Exemplo 01");
if(time1>time2){
    console.log("O time 1 venceu.");
}
if(time1<time2){
    console.log("O time 2 venceu.");
}
if(time1==time2){
    console.log("Houve empate.");
}

//if else
console.log("");
console.log("if else - Exemplo 01");
if(time1>time2){
    console.log("O time 1 venceu.")
}
else{
    console.log("O time 1 não venceu.")
}

//if else if
console.log("");
console.log("if else if - Exemplo 01");
if(time1>time2){
    console.log("O time 1 venceu");
}
else if(time1<time2){
    console.log("O time 2 venceu");
}
else{
    console.log("Houve empate");
}

//ifs aninhados
console.log("");
console.log("ifs aninhados - Exemplo 01");
if(time1!=time2){
    if(time1>time2){
        console.log("O time 1 venceu.");
    }
    else{
        console.log("O time 2 venceu.");
    }
}
else{
    console.log("Houve empate.");
}

//Operador ternário (condição ? se verdadeiro : se falso), equivale a um if else. Foi chamado neste curso de if ternário.
console.log("");
console.log("if ternário - Exemplo 01");
time1>time2 ? console.log("O time 1 venceu.") : console.log("O time 1 não venceu.");

//switch case break
console.log("");
console.log("switch case break - Exemplo 01");
switch(placar){
    case 1:
        console.log("O time 1 venceu.");
        break;
    case 2:
        console.log("O time 2 venceu.");
        break;
    default:
        console.log("Houve empate.");
}

//for - indicado para varredura de objetos indexados por inteiros, como arrays. O for iterage sobre os índices.
console.log("");
console.log("for - Exemplo 01");
var arrayA = ["a","b","c","d","e","f"];
console.log(arrayA);
for (let index = 0; index < arrayA.length; index++) {
    console.log(index);
}

//for...in - indicado para varredura de objetos indexados por strings, não é o caso de arrays. A ordem das propriedades não é relevante. O for...in iterage sobre as chaves do objeto, retornará inclusive propriedades herdadas, se houver.
console.log("");
console.log("for...in - Exemplo 01");
var objetoA = {a:1,b:2,c:3,d:4,e:5};
console.log(objetoA);
for (const key in objetoA) {
    console.log(key);
}

//for...of - indicado para varredura de objetos indexados por inteiros, como arrays. O for...of iterage sobre os valores do objeto. Não funciona bem com objetos diferentes de arrays.
console.log("");
console.log("for...of - Exemplo 01");
var arrayB = [10,11,12]; //Objeto com elementos iteráveis.
arrayB[3] = 13; //Adição de mais um elemento iterável.
arrayB.quatro = 4; //Adição de mais um elemento não iterável.
console.log(arrayB);
for (const iterator of arrayB) {
    console.log(iterator); //Exibirá somente os valores dos elementos iteráveis.
}

//while
console.log("");
console.log("while - Exemplo 01");
var arrayC = [10,11,12,13,14,15,16];
var i = 0;
while (i<arrayC.length) {
    console.log(arrayC[i]);
    i++;
}

//do while
console.log("");
console.log("do...while - Exemplo 01");
var k=0;
do {
    console.log(arrayC[k]);
    k++;
} while (k<arrayC.length);

/*
Mais informações sobre as estruturas for, while e do...while:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
*/
