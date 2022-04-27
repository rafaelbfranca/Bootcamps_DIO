export class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    apresentar(){
        if(this.nome){
            alert(`Olá! Meu nome é ${this.nome}.`);
        }
    }
}

export class Cachorro {
    constructor(nome, raca, genero){
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
