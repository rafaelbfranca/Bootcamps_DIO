const BASE_URL = "https://thatcopy.pw/catapi/rest/";

//Exemplo da função getCats com o bloco try_catch
/*
export async function getCats() {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
}
*/

//Exemplo da função getCats sem o bloco try_catch

export async function getCats() {
    const data = await fetch(BASE_URL)
    .then((res)=>res.json())
    .catch((error)=>console.log(error.message));
    return data.webpurl;
}


export async function loadImg (){
    const catImg = document.getElementById("cat");
    catImg.src = await getCats();
}


