function lerNumeros() {
    var n1 = Number(prompt("Digite o primeiro número:"));
    var n2 = Number(prompt("Digite o segundo número:"));
    if (!n1 || !n2) {
        alert("Você precisa entrar dois números.");
        lerNumeros();
    } else{
        comp(n1,n2);
    }
}    
    

function comp(num1, num2) {
    var texto = "";
    var soma = 0;

    if (num1 === num2) {
        texto += `Os números ${num1} e ${num2} são iguais. `;
    } else{
        texto += `Os números ${num1} e ${num2} não são iguais. `;
    }

    soma = num1 + num2;

    texto += `Sua soma é ${soma}, `;

    if (soma < 10) {
        texto += `que é menor que 10 e `;
    } else if(soma === 10) {
        texto += `que é igual a 10 e `;
    } else {
        texto += `que é maior que 10 e `;
    }

    if (soma < 20) {
        texto += `que é menor que 20.`;
    } else if(soma === 20) {
        texto += `que é igual a 20.`;
    } else {
        texto += `que é maior que 20.`;
    }

    alert(texto);
}

lerNumeros();
