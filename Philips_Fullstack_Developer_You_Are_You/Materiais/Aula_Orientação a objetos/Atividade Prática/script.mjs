import * as Funcao from "./funcao.mjs";

document.getElementById("criarConta").onclick =
function() {
    let conta = Funcao.criarConta();
    if(conta){
        let cartao = "Cartão de Crédito: Não";
        if (conta._cartaoCredito) {
            cartao = "Cartão de Crédito: Sim"
        }
        alert(`Conta criada com sucesso.\n
        Agência: ${conta.agencia}
        Número: ${conta.numero}
        Tipo: ${conta.tipo}
        ${cartao}
        Saldo: ${conta._saldo}`);
    }
};
