

document.getElementById('addMoneySubmit').addEventListener('click', (event)=>{

    // prevent default form loading
    event.preventDefault();


    // select the Enter Amount, Enter Pin and Current balance

    const AddInput = document.getElementById('inputAmount').value;

    const userPin = document.getElementById('inputPin').value;

    const balance = document.getElementById('balance').innerText;
 
    const currentBalance = parseInt(balance);
    
    const userAddInput = parseInt(AddInput);

    if(userPin === '1234'){
        
        const newBalance = currentBalance + userAddInput;

        document.getElementById('balance').innerText = newBalance;
        
        document.getElementById('inputAmount').value = "";
        document.getElementById('inputPin').value = "";

    }else{
        alert("Check your PIN again!")
    }
    

})