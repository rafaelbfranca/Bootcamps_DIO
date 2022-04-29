import * as Funcao from "./funcao.mjs";

let array = [1,2,3,4,5,6];
let num = "";

bloco:{ //Label para abortar o código com o break de dentro do while.
    while (!Number(num) || Number(num) < 0) {
        num = prompt("Digite um número maior ou igual a zero:");
        /*
        Caso o botão Cancelar seja pressionado, o prompt retornará null, porém se o prompt for forçado para Number, o null é convertido para 0.
        */
        if (num == null) {
            alert("Você cancelou a verificação.");
            break bloco;
        }
    }

    console.log(Funcao.confereTamanho(array, Number(num)));
}
