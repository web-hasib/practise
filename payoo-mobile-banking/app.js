// console.log('hello world')
document.getElementById("login-btn").addEventListener("click", function (event) {
    // console.log('hello world');
    event.preventDefault();
    const accountNum = document.getElementById('account-num').value;
    // const convertedAccountNum = parseInt(accountNum);
    const accountPin = document.getElementById('account-pin').value;
    const convertedAccountPin = parseInt(accountPin);
    if (accountNum.length ===11){
       if(convertedAccountPin===1234){
       window.location.href="./main.html";
       }
       else{
        alert('wrong pin')
       }
    }
    else{
        alert('Please enter a valid account number')
    }
});
