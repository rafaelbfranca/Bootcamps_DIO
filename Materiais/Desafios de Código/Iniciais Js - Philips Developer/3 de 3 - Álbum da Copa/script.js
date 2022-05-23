//Testando o Set().
/*
let num = 0;
let setFig = new Set();

do {
    num = prompt("Digite um número:");
    if (!Number(num)) {
        break;
    } else {
        setFig.add(Number(num));
        console.log(setFig);
    }
} while (Number(num));
*/



//Testando um caso de entrada.
const numTotal = 10;
const numFigCompradas = 3;
const setFig = new Set();

numFigs = [5,8,3];

for(let i = 0; i < numFigCompradas; i++){
  const fig = numFigs[i];
  setFig.add(fig);
}

console.log(numTotal - setFig.size);



//Abaixo o código entregue no desafio.

/*
const numTotal = parseInt(gets());
const numFigCompradas = parseInt(gets());
const setFig = new Set();

for(let i = 0; i < numFigCompradas; i++){
  const fig = parseInt(gets());
  setFig.add(fig);
}

print(numTotal - setFig.size);
*/
