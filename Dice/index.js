const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const rollHistoryE = document.getElementById("roll-history");
let historyList = [];
function rollDice(){
    const rollResult = Math.floor (Math.random()*6) + 1;
    const diceFace = getDiceFace(rollResult);
    console.log(rollResult);
   // diceE1.textContent = diceFace;
    diceE1.innerHTML = diceFace;
    historyList.push(rollResult)
     updateRollHistory();
}
function updateRollHistory(){
rollHistoryE.innerHTML = "";
for(let i =0 ; i<historyList.length; i++){
    const listItem =document.createElement("li")
    listItem.innerHTML = `Roll ${i+1} : <span> ${getDiceFace(historyList[i])}</span>`;
    rollHistoryE.appendChild(listItem);
}
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1 :
            return "&#9856;";
        case 2 :
             return "&#9857;";
        case 3 :
             return "&#9858;";
        case 4 :
             return "&#9859;";
        case 5 :
            return "&#9860;";
        case 6 :
            return "&#9861;";  
        default :
            return "";
    }
}
buttonE1.addEventListener("click",()=>{
diceE1.classList.add("roll-animation");
setTimeout(()=>{
    diceE1.classList.remove("roll-animation");
    rollDice();
},1000);
});