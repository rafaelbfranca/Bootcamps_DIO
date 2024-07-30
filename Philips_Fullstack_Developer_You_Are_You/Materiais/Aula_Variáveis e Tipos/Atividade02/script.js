var array1 = [2,4,7,1,0,3,0,4,8,5,6];
var array2 = [];
var array3 = null;
var array4;

function escolherArray() {
    let option = Number(prompt(
        `Escolha um array:
        1 - [2,4,7,1,0,3,0,4,8,5,6]
        2 - []
        3 - nulo
        4 - indefinido`));
    
    if (option < 1 || option > 4 || !option) {
        alert("Opção inválida!");
        escolherArray();
    } else {
        substituirNumeros(option);
    }
}

function substituirNumeros(option) {
    let array = [];
    switch (option) {
        case 1:
            array = array1;
            break;
        case 2:
            array = array2;
            break;
        case 3:
            array = array3;
            break;
        case 4:
            array = array4;
            break;
    }

    console.log(!array);

    if (!array || !array.length) { 
        /*
        Se o teste de comprimento estiver antes na lista de
        condições, acusa um erro nas opções 3 e 4, informando
        que não é possível ler a propriedade length, e o
        código não funciona corretamente. por isso a ordem
        está (!array || !array.length)
        */
        alert(`O array escolhido não tem elementos. Retorno -1.`);
    } else {
        for (i = 0; i < array.length; i++) {
            if (array[i] !== 0 && array[i]%2 == 0) {
                array[i] = 0;
            }
        }
        alert(`O array substituído é ${array}.`);
    }
}

escolherArray();
