import * as Classes from "./classes.mjs";

export function menuInicial(){
    let opcao = 0;
    while(opcao == 0){
        opcao = prompt(`Cadastrar:
        1 - Pessoa
        2 - Cachorro`);
        
        if(Number(opcao)>=1 && Number(opcao)<=2){
            ;
        } else if(opcao == null){
            opcao = 3; 
        } else {
            opcao = 0;
            alert("Opção inválida.");
        }
    }
    return Number(opcao);
}

export function cadastroPessoa() {
    let nome = "Nome";
    
    while(nome == "Nome" || nome == "" || nome.startsWith(" ")){
        nome = prompt("Informe o nome da pessoa:", "Nome");
        if(nome == null){
            pessoa = nome;
            break;
        }
    }
    
    if(nome){
        var pessoa = new Classes.Pessoa(nome);
    }
    return pessoa;
}

export function cadastroCachorro() {
    let nome = "Nome";
    let raca = "Raça";
    let genero = "Gênero";

    while(nome == "Nome" || nome == "" || nome.startsWith(" ")){
        nome = prompt("Informe o nome do animal:", "Nome");
        if(nome == null){
            break;
        }
    }

    while(nome !== null && raca == "Raça" || raca == "" || raca.startsWith(" ")){
        raca = prompt("Informe a raça do animal:", "Raça");
        if(raca == null){
            break;
        }
    }

    while(nome !== null && raca !== null && genero !== 1 && genero !== 2){
        genero = prompt(`Informe o gênero do animal:
        1 - macho
        2 - fêmea`,"Gênero");

        if(Number(genero)>=1 && Number(genero)<=2){
            genero = Number(genero);
            break;
        } else if(genero == null){
            break;
        } else {
            alert("Opção inválida.");
        }
    }

    if(nome && raca && genero){
        var cachorro = new Classes.Cachorro(nome, raca, genero);
    } else {
        cachorro = null;
    }
    return cachorro;
}
