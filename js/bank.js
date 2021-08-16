// ▓▒▒▒▒▒▒▒▒▒▒▒ HANDLE DEPOSIT BUTTON ▒▒▒▒▒▒▒▒▒▒▒▓
function getInputValue() {
    const depositInput = document.getElementById("deposit-amount");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // rest the input field 😃
    depositInput.value = '';
    return depositAmount;
}

document.getElementById("deposit-button").addEventListener('click', function(){
    const depositAmount = getInputValue();

    const depositTotal =  document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    // Adding Input Amount and Current Amount Together 😃
    depositTotal.innerText = depositAmount + depositTotalAmount

    // Adding Current Balance and Deposit Amount Together 😃
    const totalBalance = document.getElementById("balance-total");
    const perviousTotalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(perviousTotalBalanceText);
    totalBalance.innerText = totalBalanceAmount + depositAmount;

});

// ▓▒▒▒▒▒▒▒▒▒▒▒ HANDLE WITHDRAW BUTTON ▒▒▒▒▒▒▒▒▒▒▒▓
document.getElementById("withdraw-button").addEventListener("click", function(){
    // Get Amount From Input Field
   const withdrawInput = document.getElementById("withdraw-amount");
   const withdrawInputText = withdrawInput.value;
   const withdrawInputAmount = parseFloat(withdrawInputText);
   
    // Get withdraw total and added previous withdraw Amount and current withdraw amount
   const withdrawTotal = document.getElementById("withdraw-total");
   const withdrawTotalText = withdrawTotal.innerText;
   const withdrawTotalAmount = parseFloat(withdrawTotalText);
   withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;
  

   // Update the Balance
   const totalBalance = document.getElementById("balance-total");
   const perviousTotalBalanceText = totalBalance.innerText;
   const totalBalanceAmount = parseFloat(perviousTotalBalanceText);
   totalBalance.innerText = totalBalanceAmount - withdrawInputAmount;
   // reset the input field 😃
   withdrawInput.value = '';
});