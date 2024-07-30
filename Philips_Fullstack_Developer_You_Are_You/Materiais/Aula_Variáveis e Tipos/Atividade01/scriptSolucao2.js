function lerPalavra() {
    let entrada = prompt("Digite uma plavra:");
    if (!entrada) {
        alert("Nenhuma palavra foi digitada.")
        lerPalavra();
    } else {
        palindromo(entrada);
    }
}

function palindromo(entrada) {
    let fim = entrada.length - 1;

    for(let inicio = 0; inicio <= fim; inicio++){
        if (entrada[inicio] !== entrada[fim]) {
            alert(`A palavra ${entrada} não é um palíndromo.`)
            return;
        } else if (entrada.length%2 == 1 && inicio == fim) {
            alert(`A palavra ${entrada} é um palíndromo.`)
            return;
        } else if (entrada.length%2 == 0 && inicio == fim - 1) {
            alert(`A palavra ${entrada} é um palíndromo.`)
            return;
        }
        fim--;
    }
}

lerPalavra();
