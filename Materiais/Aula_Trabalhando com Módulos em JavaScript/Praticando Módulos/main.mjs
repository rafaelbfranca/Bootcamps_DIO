import * as Funcoes from "./funcoes.mjs";

var opcao = Funcoes.menuInicial();

switch (opcao) {
    case 1:
        let pessoa = Funcoes.cadastroPessoa();
        if(pessoa){
            pessoa.apresentar();
        } else {
            alert("Você optou por sair do sistema.")
        }
        break;
    case 2:
        let cachorro = Funcoes.cadastroCachorro();
        if(cachorro){
            cachorro.apresentar();
        } else {
            alert("Você optou por sair do sistema.")
        }
        break;
    case 3:
        alert("Você optou por sair do sistema.")
        break;
}
