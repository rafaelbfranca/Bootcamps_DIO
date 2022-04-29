export function valoresUnicos(array) {
    let myset = new Set(array);
    return `Os valores encontrados são: [ ${[...myset]} ]`;  
}
