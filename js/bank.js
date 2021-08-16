// ▓▒▒▒▒▒▒▒▒▒▒▒ HANDLE DEPOSIT BUTTON ▒▒▒▒▒▒▒▒▒▒▒▓
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // rest the input field 😃
    inputField.value = '';
    return amountValue;
}

document.getElementById("deposit-button").addEventListener('click', function(){
    const depositAmount = getInputValue("deposit-amount");

    // Get Current Deposit 😃
    const depositTotal =  document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + depositTotalAmount;

    // Adding Current Balance and Deposit Amount Together 😃
    const totalBalance = document.getElementById("balance-total");
    const perviousTotalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(perviousTotalBalanceText);
    totalBalance.innerText = totalBalanceAmount + depositAmount;

});

// ▓▒▒▒▒▒▒▒▒▒▒▒ HANDLE WITHDRAW BUTTON ▒▒▒▒▒▒▒▒▒▒▒▓
document.getElementById("withdraw-button").addEventListener("click", function(){
    // Get Amount From Input Field
    const withdrawInputAmount = getInputValue("withdraw-amount");

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
});