import * as Classes from "./classes.mjs";

export function menuInicial(){
    let opcao = Number(prompt(`Cadastrar:
    1 - Pessoa
    2 - Cachorro
    3 - Sair`));
    if(opcao<1 || opcao>3 || !opcao){
        opcao = 0;
    }
    return opcao;
}

export function cadastroPessoa() {
    let nome = prompt("Informe o nome da pessoa:")
    var pessoa = new Classes.Pessoa(nome);
    return pessoa;
}
/*
export function cadastroCachorro() {
    let nome = prompt("Informe o nome do animal:");
    let raca = prompt("Informe a raça do animal:");
    let genero = Number(prompt(`Informe o gênero do animal:
    1 - macho
    2 - fêmea`));
    var cachorro = new Classes.Cachorro(nome, raca, genero);
    return cachorro;
}
*/

export function cadastroCachorro() {
    let nome = -1;
    let raca = -1;
    let genero = -1;

    while (nome == -1 || raca == -1 || genero == -1) {
        if(nome == -1){
            nome = prompt("Informe o nome da animal:");
            if(!nome){
                break;
            }
        }
        if(raca == -1){
            raca = prompt("Informe a raça do animal:");
            if(!raca){
                break;
            }
        }
        while(genero !== 1 && genero !== 2){
            genero = Number(prompt(`Informe o gênero do animal:
            1 - macho
            2 - fêmea`));
            switch (genero) {
                case 1:
                case 2:
                case null:
                case "":
                    break;
            
                default:
                    alert("Opção inválida.");
            }
            /*
            if(genero !== 1 && genero !== 2){
                alert("Opção inválida.");
            }
            */
        }
    }

    if(nome && raca && genero){
        var cachorro = new Classes.Cachorro(nome, raca, genero);
        return cachorro;
    }
}
