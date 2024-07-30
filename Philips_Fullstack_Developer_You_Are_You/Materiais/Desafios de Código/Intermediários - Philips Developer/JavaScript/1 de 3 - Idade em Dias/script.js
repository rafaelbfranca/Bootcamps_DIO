
let ano, mes, qtdAnos, qtdMeses, qtdDias, resultado;
ano = 365;
mes = 30;

totalDeDias = parseInt(prompt("Informe o total de dias"));
//let totalDeDias = parseInt(gets());

qtdAnos = parseInt(totalDeDias/ano);
qtdMeses= parseInt(totalDeDias%ano/mes);
qtdDias= parseInt(totalDeDias%ano%mes);

resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
qtdDias + " dia(s)");

alert(resultado);


//Abaixo o código entregue no desafio

/*
let ano, mes, qtdAnos, qtdMeses, qtdDias, resultado;
ano = 365;
mes = 30;

let totalDeDias = parseInt(gets());

qtdAnos = parseInt(totalDeDias/ano);
qtdMeses= parseInt(totalDeDias%ano/mes);
qtdDias= parseInt(totalDeDias%ano%mes);

resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
qtdDias + " dia(s)");

print(resultado);
*/