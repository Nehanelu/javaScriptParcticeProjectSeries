/*
.claculator
#result
.buttons
.clear
.operator
.number
.equals
.decimal
*/
const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result")
for (let i=0; i<buttonsE1.length; i++){
     buttonsE1[i].addEventListener("click",() =>{
const buttonsValue = buttonsE1[i].textContent;
if (buttonsValue === "C"){
    clearResult()
}
else if(buttonsValue === "="){
   calculateResult(); 
}
else {
    appendValue(buttonsValue);
}
     });

}
function clearResult(){
   inputFieldE1.value = "";
}
function calculateResult(){
    inputFieldE1.value = eval(inputFieldE1.value);
}
function appendValue(buttonsValue){
//    inputFieldE1.value += buttonsValue;

    inputFieldE1.value =inputFieldE1.value + buttonsValue;
}