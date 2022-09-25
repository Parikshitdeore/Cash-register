var billAmount = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")
var checkButton = document.querySelector("#check-button")
var message=document.querySelector("#error-message")
checkButton.addEventListener("click", function validateBillAndCash(){
if(billAmount.value > 0){

}
else{
   
    showMessage("Invalid bill Amount")
}
})















function hideMessage() {
    message.style.display = "none";
  }
function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}
