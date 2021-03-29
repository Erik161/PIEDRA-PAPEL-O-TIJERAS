​
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";
​
const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;
​
const piedrabtn = document.getElementById("piedra");
const papelbtn = document.getElementById("papel");
const tijerasbtn = document.getElementById("tijeras");
const resultText = document.getElementById("text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
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
    const machineOption = calcMachineOption;
    const result = calcResult(userOption, machineOption);

    userImg.src = "/img/"+userOption+".svg"
    machineImg.src = "/img/"+machineOption+".svg"
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
    }
}

function calcMachineOption(){
    Math.floor(Math.random()*3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERAS;
    }

}
​
​
function calcResult(userOption, machineOption){

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
