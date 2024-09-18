

// AddMoney and Withdraw form toggle system

document.getElementById('withdrawBtn').addEventListener('click', ()=>{

    document.getElementById('depo-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');

})

document.getElementById('addMoneyBtn').addEventListener('click', ()=>{

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('depo-form').classList.add('hidden');

})