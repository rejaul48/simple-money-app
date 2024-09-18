




// login form this is not a valid way to log in but try to catch this logic how can user login

document.getElementById('logIn-btn').addEventListener('click', (event)=>{

    // prevent the default reloade logIn page

    event.preventDefault();

    const userNumber = document.getElementById('inputNumber').value;

    const userPin = document.getElementById('inputPin').value;

    if(userNumber === '602748' && userPin == '1234'){
        window.location.href = 'app.html';
    }else{
        alert("check your mobile number or PIN again");
    }

})