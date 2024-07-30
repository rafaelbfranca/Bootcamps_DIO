/*Para visualizar as impressões no console fazer os seguintes passos:
1 - Abrir o arquivo html com o Live Server,
2 - Clicar com o botão invertido na janela do navegador e selecionar inspecionar,
3 - Selecionar a aba Console na janela do DevTools.
*/

//Vetores ou arrays

let arrayA = ["string",0,true];
console.log(arrayA);

let arrayB = ["string",0,true,["array1",1,false],["array2",2,true],["array3",3,false],["array4",4,true]];
console.log(arrayB); //Retorna todo o conteúdo do arrayB.
console.log(arrayB[6][0]); //Retorna o conteúdo da posição 0 do array que está na posição 6 do arrayB, ou seja, a string "array4".

console.log("")
console.log("foreach - Exemplo 01:")
function imprimir(item,index){
    console.log(index,item);
}

arrayA.forEach(imprimir); //A função callback pode ser chamada como argumento do foreach ou declarada diratamente dentro dos parênteses, como no exemplo a seguir.

console.log("")
console.log("foreach - Exemplo 02:")
arrayB.forEach(function(item,index){console.log(index,item)});

/*
Mais explicações sobre o método foreach e sua função callback:
https://blog.betrybe.com/javascript/javascript-foreach/
*/

console.log("")
console.log("push - Exemplo 01:")
console.log(arrayA); //Array sem o elemento 5 no final.
console.log(arrayA.push(5) + " - Novo comprimento do array."); //Adiciona o elemento no final do array.
console.log(arrayA); //Array com o elemento 5 no final.

console.log("")
console.log("pop - Exemplo 01:")
console.log(arrayA); //Array com o elemento 5 no final.
console.log(arrayA.pop() + " - Retorna o elemento excluído."); //Exclui o último elemento do array e retorna o elemento excluído.
console.log(arrayA); //Array sem o elemento 5 no final.

console.log("")
console.log("unshift - Exemplo 01:")
console.log(arrayA); //Array sem o elemento "X" no início.
console.log(arrayA.unshift("X") + " - Novo comprimento do array."); //Adiciona um elemento no início do array e retorna o novo comprimento do array.
console.log(arrayA); //Array com o elemento "X" no início.

console.log("")
console.log("shift - Exemplo 01:")
console.log(arrayA); //Array com o elemento "X" no início.
console.log(arrayA.shift("X") + " - Retorna o elemento excluído."); //Exclui o primeiro elemento do array e retorna o elemento excluído.
console.log(arrayA); //Array sem o elemento "X" no início.

console.log("")
console.log("indexOf - Exemplo 01:")
var item = true;
console.log("No arrayA o item " + item + " tem índice " + arrayA.indexOf(item) + "."); //Retorna o índice do item especificado como argumento.

console.log("")
console.log("slice - Exemplo 01: parâmetros positivos, o 0 representa o primeiro elemento")
//O slice retorna os elementos dos índices especificados, sem alterar o array original. Em outras palavras, o slice copia e retorna um pedaço especificado de um array.
let arrayC = [0,1,2,3,4,5,6,7,8,9];
console.log(arrayC.slice(0,3)); //Passando start e end, a partir da esquerda. O elemento do índice passado como end não é retornado.
console.log(arrayC.slice(3)); //Passando apenas start, a partir da esquerda. São retornados todos os elementos até o final do array.
console.log("slice - Exemplo 02: parâmetros negativos, o -1 representa o último elemento")
console.log(arrayC.slice(-3)); //Passando apenas start, a partir da direita. São retornados todos os elementos até o final do array.
console.log(arrayC.slice(-3,-1)); //Passando apenas start, a partir da direita. O elemento do índice passado como end não é retornado.

console.log("");
console.log("splice - Exemplo 01: Deletando elementos");
//O splice retorna os elementos dos índices deletados e altera o array original. Em outras palavras, o splice retira e retorna um pedaço especificado de um array.
let arrayD = [0,1,2,3,4,5];
console.log(arrayD); //Array com todos os elementos iniciais.
let arrayDeletado1 = arrayD.splice(0,3);
console.log(arrayDeletado1); //Retorna o array com os elementos deletados.
console.log(arrayD); //Array inicial após os elementos deletados.

console.log("");
console.log("splice - Exemplo 02: Inserindo elementos");
let arrayE = [0,1,2,3,4,5];
console.log(arrayE); //Array com todos os elementos iniciais.
let arrayDeletado2 = arrayE.splice(3,0,"A","B","C");
console.log(arrayDeletado2); //Retorna um array vazio, pois nenhum elemento foi deletado.
console.log(arrayE); //Array com os elementos inseridos.

console.log("");
console.log("splice - Exemplo 03: Substituindo elementos");
let arrayF = [0,1,2,3,4,5];
console.log(arrayF); //Array com todos os elementos iniciais.
let arrayDeletado3 = arrayF.splice(3,3,"A","B","C");
console.log(arrayDeletado3); //Retorna o array com os elementos deletados.
console.log(arrayF); //Array com os elementos substituídos.

/*
Mais explicações sobre o método splice:
https://www.javascripttutorial.net/javascript-array-splice/
*/

console.log("");
console.log("objetos - Exemplo 01: Criando objeto");
//Por sintaxe literal, inserindo parâmetros e métodos na declaração.
let xicara = {
    //Parâmetros
    cor: "azul",
    tamanho: 3,
    //Métodos
    tomarCafe: function (){
        console.log("Tomar café demais não é bom.");
    }
};
console.log(xicara); //Retorna todo o conteúdo do objeto.

//Por construtor, adicionando parâmetros e métodos posteriormente, conforme for necessário.
let xicara2 = new Object;
xicara2.cor = "verde";
xicara2.tamanho = 4;
xicara2.tomarCafe = function (){
    console.log("Tomar café antes de deitar não é bom.");
}
console.log(xicara2); //Retorna todo o conteúdo do objeto.

console.log("");
console.log("objetos - Exemplo 02: Acessando objeto");

console.log(xicara); //Retorna todo o conteúdo do objeto.
//Duas formas para retornar o parâmetro cor.
console.log(xicara.cor);
console.log(xicara["cor"]);
//Duas formas para retornar o parâmetro tamanho.
console.log(xicara.tamanho);
console.log(xicara["tamanho"]);
//Duas formas para retornar o código do método.
console.log(xicara.tomarCafe); 
console.log(xicara["tomarCafe"]);

console.log("");
console.log("objetos - Exemplo 03: Chamando um método do objeto");

xicara.tomarCafe(); //Executa o método.

console.log("");
console.log("objetos - Exemplo 04: Instanciando um objeto");
//Utilizando o construtor
let minhaXicara = new Object;
minhaXicara = xicara;
console.log(minhaXicara);
//Ou simplesmente atribuindo um objeto na declaração.
let minhaXicara2 = xicara2;
console.log(minhaXicara2);

console.log("");
console.log("objetos - Exemplo 05: Objeto dentro de um objeto");

var pessoa = {
    primeiroNome: "Saci",
    ultimoNome: "Pererê",
    idade: 25,
    endereco: {
        num: 1,
        pais:"BR"
    }
};

console.log(pessoa.endereco.pais); // retorna "BR"

/*
Mais explicações sobre objetos:
https://www.tutorialsteacher.com/javascript/javascript-object
*/
