export function confereTamanho(array, num) {
    
    try {
        if (!array || !num) {
            throw new ReferenceError("Informe todos os parâmetros.");
        }
        if (typeof(array) != "object") {
            throw new TypeError("A array precisa ser do tipo \"object\".");
        }
        if (typeof(num) != "number") {
            throw new TypeError("O valor informado precisa ser do tipo \"number\".");
        }
        if (array.length != num) {
            throw new RangeError("Tamanho inválido.");
        }
        return array; //No caso de uma ocorrência de erro, o throw interrompe o bloco try e não executa o return.
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError.");
        } else if(error instanceof TypeError){
            console.log("Este erro é um TypeError.");
        } else if(error instanceof RangeError){
            console.log("Este erro é um RangeError.");
        } else {
            console.log("Tipo de erro não esperado: " + error);
        }
    }
}
