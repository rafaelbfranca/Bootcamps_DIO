import * as Classe from "./classe.mjs";

export function criarConta() {
    let alertaCancelamento = "Operação cancelada.";
    let contaCriada = "";
    let tipo = "";
    let agencia = "";
    let numero = "";
    let cartaoCredito = false;
                
    bloco:{
        while(!Number(tipo) || Number(tipo)<1 || Number(tipo)>3){
            tipo = prompt(`Informe o tipo de conta:\n1 - Corrente\n2 - Poupança\n3 - Universitária`);

            if (tipo == null) {
                alert(alertaCancelamento);
                break bloco;
            }
        }

        while(!Number(agencia) || Number(agencia)<1 || Number(agencia)>10){
            agencia = prompt(`Informe o número da agência:`, `De 1 a 10.`);
            if (agencia == null) {
                alert(alertaCancelamento);
                break bloco;
            }
        }
        
        while(!Number(numero) || Number(numero)<1 || Number(numero)>99999 || numero.length>5){
            numero = prompt(`Informe o número da conta (5 dígitos):`, `Ex: 00005`);
            if (numero == null) {
                alert(alertaCancelamento);
                break bloco;
            }
        }
        
        switch (Number(tipo)) {
            case 1:
                let opcaoCartao = "";
                while(!Number(opcaoCartao) || Number(opcaoCartao)<1 || Number(opcaoCartao)>2){
                    opcaoCartao = prompt(`Deseja cartão de crédito:\n1 - Sim\n2 - Não`);
                    
                    if (opcaoCartao == null) {
                        alert(alertaCancelamento);
                        break bloco;
                    } else if (opcaoCartao == 1) {
                        cartaoCredito = true;
                    }
                }
                contaCriada = new Classe.ContaCorrente(agencia, numero, cartaoCredito);
                break;
            case 2:
                contaCriada = new Classe.ContaPoupanca(agencia, numero);
                break;
            case 3:
                contaCriada = new Classe.ContaUniversitaria(agencia, numero);
                break;
        }
        
        return contaCriada;
    }
}
