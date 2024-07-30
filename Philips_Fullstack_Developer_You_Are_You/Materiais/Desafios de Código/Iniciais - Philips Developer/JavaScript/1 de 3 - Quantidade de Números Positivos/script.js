let totalPositivos = 0;
let numeroInformado = "";

Bloco:{
    for (let i = 6; i >0; i--){
        do {
            numeroInformado = prompt(
`Você precisa informar 6 números positivos ou negativos.
Falta informar ${i} número(s).
Para sair, digite s.`);
            
            if (numeroInformado == "s" || numeroInformado == "S" || numeroInformado == null) {
                break Bloco;
            }
            if (Number(numeroInformado) > 0) {
                totalPositivos++;
            }
        } while (!Number(numeroInformado));
    }
    alert(`Foram informados ${totalPositivos} valores positivos.`);
}

//Abaixo o código entregue no desafio, com os métodos gets() e console.log().
//A saída tem que ser exatamente como a saída esperada, inclusive sem o ponto final.
/*
let totalPositivos = 0;
let numeroInformado = "";

Bloco:{
    for (let i = 6; i >0; i--){
        do {
            numeroInformado = gets();
            
            if (numeroInformado == "s" || numeroInformado == "S" || numeroInformado == null) {
                break Bloco;
            }
            if (Number(numeroInformado) > 0) {
                totalPositivos++;
            }
        } while (!Number(numeroInformado));
    }
    console.log(`${totalPositivos} valores positivos`);
}
*/
