var pessoas = [
    {
        nome: "Pedro",
        idade: 15
    },
    {
        nome: "Carla",
        idade: 25
    },
    {
        nome: "Gabriel",
        idade: 8
    }
];

var animais = [
    {
        especie: "cachorro",
        raca: "labrador",
        nome: "Totó",
        idade: 5
    },
    {
        especie: "gato",
        raca: "siamês",
        nome: "Flor",
        idade: 3
    }
]

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

function seletor(){;
    let avisoCancelamento = "Você cancelou o processo.";
    let anos = 0;
    let grupo = 0;
    
    //Solicita o tempo em anos.
    while (!Number(anos) || Number(anos) < 0) {
        anos = prompt(`Digite o número de anos:`);

        if (anos == null) {
            alert(avisoCancelamento);
            break;
        }
    }

    if(anos){
        while (Number(grupo) !== 1 && Number(grupo) !== 2) {
            grupo = prompt(
                `Escolha o grupo:
                1 - Pessoas
                2 - Animais`);
            
            if (grupo == null) {
                alert(avisoCancelamento);
                break;
            }
        }

        switch (Number(grupo)) {
            case 1:
                //Salva todos os nomes de pessoas em um array auxiliar.
                let seletorPessoas = [];
                for (const iterator of pessoas) {
                    let {nome} = iterator;
                    seletorPessoas.push(nome);
                }

                //Prepara a lista de pessoas para exibir no prompt.
                let listaPessoas = "";
                for (const iterator of seletorPessoas) {
                    listaPessoas += `${seletorPessoas.indexOf(iterator) + 1} - ${iterator}\n`;
                }

                //Exibe a lista de pessoas no prompt.
                let pessoaEscolhida = "";
                while (!Number(pessoaEscolhida) || Number(pessoaEscolhida) <= 0 || Number(pessoaEscolhida) > seletorPessoas.length) {
                    pessoaEscolhida = prompt(`Escolha a pessoa:\n${listaPessoas}`);
                    if (pessoaEscolhida == null) {
                        alert(avisoCancelamento);
                        break;
                    }
                }

                //Exibe o resultado da função para a escolha feita.
                if(pessoaEscolhida){
                    alert(calculaIdade.call(pessoas[pessoaEscolhida - 1], Number(anos)));
                }

                break;

            case 2:
                //Salva todos os nomes de animais em um array auxiliar.
                let seletorAnimais = [];
                for (const iterator of animais) {
                    let {nome} = iterator;
                    seletorAnimais.push(nome);
                }

                //Prepara a lista de animais para exibir no prompt.
                let listaAnimais = "";
                for (const iterator of seletorAnimais) {
                    listaAnimais += `${seletorAnimais.indexOf(iterator) + 1} - ${iterator}\n`;
                }

                //Exibe a lista de animais no prompt.
                let animalEscolhido = "";
                while (!Number(animalEscolhido) || Number(animalEscolhido) <= 0 || Number(animalEscolhido)> seletorAnimais.length) {
                    animalEscolhido = prompt(`Escolha o animal:\n${listaAnimais}`);
                    if (animalEscolhido == null) {
                        alert(avisoCancelamento);
                        break;
                    }
                }

                //Exibe o resultado da função para a escolha feita.
                if(animalEscolhido){
                    alert(calculaIdade.call(animais[animalEscolhido - 1], Number(anos)));
                }

                break;
        }
    }
}

seletor();