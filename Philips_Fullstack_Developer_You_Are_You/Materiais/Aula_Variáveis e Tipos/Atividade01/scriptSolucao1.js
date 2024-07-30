//Solução 1

function lerPalavra() {
    let entrada = prompt("Digite uma palavra:");
    if (!entrada) {
        alert("Nenhuma palavra digitada.")
        lerPalavra();
    } else {
        palindromo(entrada);
    }
}

function palindromo(entrada) {
    if (entrada.split("").reverse().join("") === entrada) {
        alert(`A palavra ${entrada} é um palíndromo.`);
    } else {
        alert(`A palavra ${entrada} não é um palíndromo.`);
    }
}

lerPalavra();