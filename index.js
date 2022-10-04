var billAmount = document.querySelector("#bill-amount")//
var cashGiven = document.querySelector("#cash-given")// 1988%500
var checkButton = document.querySelector("#check-button")
var message = document.querySelector("#error-message")
var noOfNotesInTable = document.querySelectorAll(".no-of-notes")
var notesAvailable=[2000,500,200,100,50,10,5,1];

checkButton.addEventListener("click", validateBillAndCash)
function validateBillAndCash(){
hideMessage()
if(billAmount.value > 0){
    if(cashGiven.value > billAmount.value){
var changeToReturn = cashGiven.value - billAmount.value;
calculateNotes(changeToReturn)
    }
    else{
        showMessage("⚠️ The cash given is less than the bill amount")}
}
else{
    showMessage("⚠️ Invalid bill Amount")
}
}
function calculateNotes(changeToReturn){
    for (let i = 0; i < notesAvailable.length; i++) {
        var noOfNotes = changeToReturn/notesAvailable[i];
       changeToReturn =changeToReturn % notesAvailable[i];
       noOfNotesInTable[i].innerText = Math.trunc(noOfNotes);
   }
}


function hideMessage() {
    message.style.display = "none";
  }
function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}