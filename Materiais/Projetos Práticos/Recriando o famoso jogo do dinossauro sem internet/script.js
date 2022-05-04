/*
Link do Repositório do Projeto na versão apresentada no curso: https://github.com/celso-henrique/dio-dino-game
*/


//Versão com adaptações
const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let pulando = false;
let dinoPosition = -60;
    
function handleKeyUp(event) {
    if(event.keyCode === 32 && !pulando){
        jump();
    }
    /*
    Dica de site para descobrir o keycode de qualquer tecla pressionada:
    https://www.toptal.com/developers/keycode
    */
}

function jump() {
    let sentido = "subir";
    pulando = true;
    
    let upInterval = setInterval(()=>{
        if (sentido === "subir" && dinoPosition <= 100) {
            dinoPosition += 10;
        } else if (dinoPosition > 100) {
            sentido = "descer";
        }

        if (sentido === "descer" && dinoPosition > -60) {
            dinoPosition -= 10;
        } else if (dinoPosition === -60) {
            clearInterval(upInterval);
            pulando = false;
        }
        dino.style.bottom = dinoPosition+'px';
    },20);
}

function createCactus() {
    const cactus = document.createElement("div");
    let cactusPosition = window.innerWidth - 60;
    let randomTime = Math.random() * 6000;
    cactus.classList.add("cactus");
    cactus.style.left = cactusPosition + "px";
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 60 && cactusPosition < 120 && dinoPosition < 0){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
        }else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);
