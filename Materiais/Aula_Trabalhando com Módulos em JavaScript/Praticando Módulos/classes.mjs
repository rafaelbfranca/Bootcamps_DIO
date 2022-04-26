export class Pessoa {
    constructor(nome){
        if (!nome) {
            if(confirm(`É obrigatório informar o nome da pessoa.
            OK -> Informar nome
            Cancelar -> Sair`)){
                this.nome = prompt("Informe o nome da pessoa:");
            } else {
                alert("Você optou por não informar o nome e sair.");
            }
        } else {
            this.nome = nome;
        }
    }

    apresentar(){
        if(this.nome){
            alert(`Olá! Meu nome é ${this.nome}.`);
        }
    }
}

export class Cachorro {
    constructor(nome, raca, genero){
        /*
        if(!nome || !raca || !genero){
            if(confirm(`É obrigatório informar o nome, a raça e o gênero do animal.
            OK -> Informar nome, raça e gênero
            Cancelar -> Sair`)){
                if(!this.nome){
                    this.nome = prompt("Informe o nome da animal:");
                }
                if(!this.raca){
                    this.raca = prompt("Informe a raça do animal:");
                }
                while(this.genero !== 1 && this.genero !== 2){
                    this.genero = Number(prompt(`Informe o gênero do animal:
                    1 - macho
                    2 - fêmea`));
                    if(this.genero !== 1 && this.genero !== 2){
                        alert("Opção inválida.");
                    }
                }
            } else {
                alert("Você optou por não informar o nome, a raça e o gênero e sair.");
            }
        } else {
            this.nome = nome;
            this.raca = raca;
            this.genero = genero;
        }
        */
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
    }

    apresentar(){
        if(this.nome && this.raca && this.genero){
            if(this.genero === 1){
                alert(`Este cachorro é o ${this.nome}, ele é da raça ${this.raca}.`);
            } else {
                alert(`Esta cachorra é a ${this.nome}, ela é da raça ${this.raca}.`);
            }
        }
    }
}
