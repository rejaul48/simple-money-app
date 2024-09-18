


// withdraw form

document.getElementById('withdMoneySubmit').addEventListener('click', (event) => {

    // stop form default loading
    event.preventDefault();

    // select Current Amount, WithdrawAmount, and pin then check

    const balance = document.getElementById('balance').innerText;
    const currentBalance = parseInt(balance);

    const inputAmount = document.getElementById('depoinputAmount').value;

    const withdrawValue = parseInt(inputAmount);
    const userPin = document.getElementById('depoinputPin').value;

    if (currentBalance < withdrawValue) {
        alert("Withdrawal unavailable. Minimum Balance limit of 500.");
    }


    else if (userPin === '1234') {


        const newBalance = currentBalance - withdrawValue;
        if (newBalance < 500) {
            alert("Withdrawal unavailable. Your balance is below the minimum limit of 500.");
        }
        else {
            document.getElementById('balance').innerText = newBalance;

            document.getElementById('depoinputAmount').value = "";
            document.getElementById('depoinputPin').value = "";
        }



    }

    else {
        alert("Check your PIN number again!")
    }
})