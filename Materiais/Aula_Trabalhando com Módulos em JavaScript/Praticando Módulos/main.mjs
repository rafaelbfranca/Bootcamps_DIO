import * as Funcoes from "./funcoes.mjs";

var opcao = 0;

while(opcao === 0){
    opcao = Funcoes.menuInicial();

    if(opcao === 0){
        alert("Opção inválida.");
    }
}

switch (opcao) {
    case 1:
        let pessoa = Funcoes.cadastroPessoa();
        pessoa.apresentar();
        break;
    case 2:
        let cachorro = Funcoes.cadastroCachorro();
        cachorro.apresentar();
        break;
    case 3:
        alert("Você optou por sair do sistema.")
        break;
}


