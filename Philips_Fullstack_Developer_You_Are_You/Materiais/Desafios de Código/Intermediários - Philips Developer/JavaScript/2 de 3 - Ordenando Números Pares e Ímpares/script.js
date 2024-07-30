let totalItems = parseInt(prompt("Total de números"));
//let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
    let number = parseInt(prompt());
  //let number = parseInt(gets());
  if (number%2 == 0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}
pares.sort((a, b) => a - b); //Para ordenar crescente
impares.sort((a, b) => b - a); //Para ordenar decrescente

for(let i = 0; i < pares.length;i++){
  console.log(pares[i]);
  //print(pares[i])
}
for(let i = 0; i < impares.length;i++){
    console.log(impares[i]);
  //print(impares[i])
}


//Abaixo o código entregue no desafio

/*
let totalItems = parseInt(gets());
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
    let number = parseInt(gets());
    if (number%2 == 0){
        pares.push(number);
    }
    else {
        impares.push(number);
    }
}
pares.sort((a, b) => a - b);
impares.sort((a, b) => b - a);

for(let i = 0; i < pares.length;i++){
    print(pares[i])
}
for(let i = 0; i < impares.length;i++){
    print(impares[i])
}
*/
