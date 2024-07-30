export class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
        /*
        Quando for necessário implementar os métodos get e set,
        é recomendado acrescentar o underline na variável
        para que o nome possa ser utilizado nos métodos.
        */
    }

    get saldo (){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor;
        } else {
            alert("Saldo insuficiente.");
        }
        return this._saldo
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo
    }
}

export class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

export class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupança";
    }
}

export class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitária";
    }

    sacar(valor){
        if (valor < 500) {
            if(valor <= this._saldo){
                this._saldo -= valor;
            } else{
                alert("Saldo insuficiente.");
            }
        } else{
            alert("Valor acima do limite permitido.");
        }
    }
}
