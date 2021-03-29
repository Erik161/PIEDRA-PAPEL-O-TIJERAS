​
const PIEDRA = 0;
const PAPEL = 1;
const TIJERAS = 2;
​
const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;
​
const piedrabtn = document.getElementById("piedra");
const papelbtn = document.getElementById("papel");
const tijerasbtn = document.getElementById("tijeras");
const resultText = document.getElementById("text");
​
​
piedrabtn.addEventListener("click",()=>{
    play("PIEDRA");
});
​
papelbtn.addEventListener("click",()=>{
    play("PAPEL");
});
​
tijerasbtn.addEventListener("click",()=>{
    play("TIJERAS");
});
​
function play (userOption){
    const machineOption = Math.floor(Math.random()*3);
    const result = calcResult(userOption, machineOption);
​
    switch(result){
        case EMPATE:
            resultText.innerHTML = "HAY EMPATE";
        break;
​
        case GANADOR:
            resultText.innerHTML = "HAZ GANADO";
        break;
​
        case PERDEDOR:
            resultText.innerHTML = "HAZ PERDIDO";
        break;
​
​
​
​
    }
​
​
​
​
​
​
​
​
    if (userOption === machineOption) {
        return EMPATE;
​
    }else if (userOption === PIEDRA) {
        if (machineOption === PAPEL) return PERDEDOR;
        if (machineOption == TIJERAS)  return GANADOR;
​
    }else if (userOption === PAPEL) {
        if (machineOption === TIJERAS)return PERDEDOR;
        if (machineOption === PIEDRA) return GANADOR;
    }
    else if (userOption === TIJERAS) {
        if (machineOption === PIEDRA)return PERDEDOR;
        if (machineOption === PAPEL) return GANADOR;
    }
​
}
​
​
function calcResult(userOption, machineOption){
    if (userOption === machineOption) {
    return EMPATE;
    }else if (userOption === PIEDRA) {
​
    }
​
}
