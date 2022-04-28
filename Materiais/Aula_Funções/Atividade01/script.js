const alunos = [
    {
        nome: "João",
        nota: 7,
        turma: "1B"
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "1B"
    },
    {
        nome: "Paulo",
        nota: 6,
        turma: "1B"
    },
    {
        nome: "Miguel",
        nota: 3,
        turma: "1B"
    },
];

//Usando o for comum
function alunosAprovados1(array, media){
    let aprovados = [];

    for (let i = 0; i<array.length; i++) {
        const {nome,nota} = array[i]; //Usando const
        
        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

//Usando o for...of
function alunosAprovados2(array, media){
    let aprovados = [];
    for (const iterator of array) {
        let {nome,nota} = iterator; //Usando let.

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados1(alunos,6));
console.log(alunosAprovados2(alunos,7));
