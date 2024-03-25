
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubbmit = document.getElementById("mysubbmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubbmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'You are subscribed';
    }
    else{
        subResult.textContent = 'You are not subscribed';

    if(visaBtn.checked){
        paymentResult.textContent = 'You are paying with visa'
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = 'You are paying with Master card'
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = 'You are paying with Pay Pal'
    }
    else{
        paymentResult.textContent = 'You must select a payment type'
    }


    }
    }

