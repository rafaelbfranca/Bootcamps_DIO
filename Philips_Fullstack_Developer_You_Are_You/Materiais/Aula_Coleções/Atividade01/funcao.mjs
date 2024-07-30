export function getAdmins(myMap) {
    //Declaração inicial de variáveis.
    let arrayAdmins = [];
    let saida = `Os administradores do grupo são:\n`;
    let i = 0;

    //Filtro de admins.
    for (const [key,value] of myMap) {
        if (value == "admin") {
            arrayAdmins.push(key);
        }
    }

    //Formação da string de saída para o alert.
    arrayAdmins.forEach(element => {
        i++;
        saida += `${i} - ${element}\n`;    
    });

    //Saída.
    alert(saida);
}
