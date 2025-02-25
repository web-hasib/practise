// alert();
// addMoney sention
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    // alert();
    event.preventDefault();
    const account= document.getElementById('account-num').value;
    // const convertedAccount= parseInt(account);
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

      //  transection history
      const container = document.getElementById("trans-his-container");
      const p = document.createElement("p");
      p.innerText = `You Added $ ${convertedAmount}  from ${account}. Remaining Balance: $ ${sum}`;
      container.appendChild(p);


    } else {
      alert("wrong pin");
    }
  });

// cashOut section
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
    document.getElementById("main-balance").innerText = sum;

    //  transection history
    const container = document.getElementById("trans-his-container");
    const p = document.createElement("p");
    p.innerText = `You Withdrew $ ${convertedAmount}  from your account. Remaining Balance: $ ${sum}`;
    container.appendChild(p);
  } else {
    alert("Wrong pin");
  }
});

// Transection section
