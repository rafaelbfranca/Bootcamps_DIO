const c = parseInt(prompt("número de linhas"));
//const c = parseInt(gets());
var v = new Array(c);

for (let i = 0; i < c; i++){
    v[i] = parseInt(prompt());
  //v[i] = parseInt(gets());
}

let  primeiroInscrito = true;

const teste  = Number(v.shift());
console.log(teste); //saiu
console.log(v); //ficou

for(i = 0; i< v.length; i++) {
  const bobo  = Number(v[i]);
  if (teste<bobo) {
    primeiroInscrito = false;
  }
};

alert(primeiroInscrito ? "S" : "N");
//print(primeiroInscrito ? "S" : "N");


//Abaixo o código entregue no desafio

/*
const c = parseInt(gets());
var v = new Array(c);

for (let i = 0; i < c; i++){
    v[i] = parseInt(gets());
}

let  primeiroInscrito = true;

const teste  = Number(v.shift());

for(i = 0; i< v.length; i++) {
  const bobo  = Number(v[i]);
  if (teste<bobo) {
    primeiroInscrito = false;
  }
};

print(primeiroInscrito ? "S" : "N");
*/