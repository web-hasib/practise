// alert();
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    // alert();
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    console.log(amount);
    const convertedAmount = parseFloat(amount);
    //    alert(convertedAmount);
    const pin = document.getElementById("account-pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // alert( typeof convertedMainBalance);
    // alert(convertedPin);
    if (convertedPin === 1234) {
      // alert('ok');
      const sum = convertedMainBalance + convertedAmount;
      document.getElementById("main-balance").innerText = sum;
      // alert(sum);
    } else {
      alert('wrong pin');
    }
  });

document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const pin = document.getElementById("cashout-pin").value;
  const convertedPin = parseInt(pin);
  const amount = document.getElementById("cashout-amount").value;
  const convertedAmount = parseFloat(amount);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);
  if (convertedPin === 1234) {
   const sum = convertedMainBalance - convertedAmount;
   document.getElementById("main-balance").innerText=sum;
  } else {
    alert("Wrong pin");
  }
  

});
