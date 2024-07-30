function calculadora() {
    const operacao = Number(prompt("Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    var n1;
    var n2;
    let resultado;

    function lerNumeros(){
        n1 = Number(prompt("Insira o primeiro valor:"));
        n2 = Number(prompt("Insira o segundo valor:"));
        if (!n1 || !n2) {
            alert("Você precisa entrar dois números.");
            calculadora();
        }
    }
    
    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao() {
        resultado = n1 * n2;
        if (n1<0 && n2>=0) {
            alert(`(${n1}) * ${n2} = ${resultado}`);    
        } else if(n1>=0 && n2<0){
            alert(`${n1} * (${n2}) = ${resultado}`);
        } else if(n1<0 && n2<0){
            alert(`(${n1}) * (${n2}) = ${resultado}`);
        } else{
            alert(`${n1} * ${n2} = ${resultado}`);
        }
    }

    function divisaoReal(){
        resultado = n1 / n2;
        if(n2==0){
            alert("O divisor não pode ser zero.");
        } else{
            if (n1<0 && n2>0) {
                alert(`(${n1}) / ${n2} = ${resultado}`);    
            } else if(n1>=0 && n2<0){
                alert(`${n1} / (${n2}) = ${resultado}`);
            } else if(n1<0 && n2<0){
                alert(`(${n1}) / (${n2}) = ${resultado}`);
            } else{
                alert(`${n1} / ${n2} = ${resultado}`);
            }
        }
    }

    function divisaoInteira(){
        resultado = n1 % n2;
        if(n2==0){
            alert("O divisor não pode ser zero.");
        } else{
            if (n1<0 && n2>0) {
                alert(`(${n1}) % ${n2} = ${resultado}`);    
            } else if(n1>=0 && n2<0){
                alert(`${n1} % (${n2}) = ${resultado}`);
            } else if(n1<0 && n2<0){
                alert(`(${n1}) % (${n2}) = ${resultado}`);
            } else{
                alert(`${n1} % ${n2} = ${resultado}`);
            }
        }
    }

    function potenciacao(){
        resultado = n1 ** n2;
        if (n1<0 && n2>0) {
            alert(`(${n1}) ** ${n2} = ${resultado}`);    
        } else if(n1>=0 && n2<0){
            alert(`${n1} ** (${n2}) = ${resultado}`);
        } else if(n1<0 && n2<0){
            alert(`(${n1}) ** (${n2}) = ${resultado}`);
        } else{
            alert(`${n1} ** ${n2} = ${resultado}`);
        }
    }

    function novaOperacao() {
        let opcao = Number(prompt("Deseja fazer outra operação:\n 1 - Sim\n 2 - Não"));

        switch (opcao) {
            case 1:
                calculadora();
                break;
            case 2:
                alert("Até mais!");
                break;
            default:
                alert("Digite uma opção válida");
                novaOperacao();
        }
    }

    switch (operacao) {
        case 1:
            lerNumeros()
            soma();
            novaOperacao();
            break;
        case 2:
            lerNumeros()
            subtracao();
            novaOperacao();
            break;
        case 3:
            lerNumeros()
            multiplicacao();
            novaOperacao();
            break;
        case 4:
            lerNumeros()
            divisaoReal();
            novaOperacao();
            break;
        case 5:
            lerNumeros()
            divisaoInteira();
            novaOperacao();
            break;
        case 6:
            lerNumeros()
            potenciacao();
            novaOperacao();
            break;
        default:
            alert("Opção inválida.");
            calculadora();
            break;
    }
}

calculadora();