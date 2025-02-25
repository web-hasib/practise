// alert()
document.getElementById('cash-out-container').style.display = 'none';
document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cash-out-container').style.display = 'none';
    document.getElementById('add-money-container').style.display = 'block';
    document.getElementById('transection-container').style.display = 'none';
});
document.getElementById('cash-out-box').addEventListener('click', function(){
    document.getElementById('cash-out-container').style.display = 'block';
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('transection-container').style.display = 'none';
});
document.getElementById('transection-box').addEventListener('click', function(){
    document.getElementById('cash-out-container').style.display = 'none';
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('transection-container').style.display = 'block';
});