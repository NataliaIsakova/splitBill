const button = document.querySelector("#btn");
button.addEventListener('click', culculation);

const buttonPersent = document.querySelector("#deposit");
buttonPersent.addEventListener('click', showPersent);

function showPersent(e) {
    e.preventDefault();
    persents.style.display = "block";
}

function culculation(e) {
    e.preventDefault();
    const incomes = document.querySelector("#income").value;
    const payments = document.querySelector("#payments").value;
    const otherPayments = document.querySelector("#otherPayments").value;
    const persents = document.querySelector("#savingsAmount").value;

    
    if(incomes === "" || payments === "" || otherPayments === "") {
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
        })
    }

    let allPayments = (+ payments) + (+ otherPayments);
    let deposit = incomes * persents;
    let result = incomes - allPayments - deposit;

    allPayments=allPayments.toFixed(2);
    deposit=deposit.toFixed(2);
    result=result.toFixed(2);

    document.querySelector("#recievedSum").textContent = incomes;
    document.querySelector("#spentSum").textContent = allPayments;
    document.querySelector("#theRest").textContent = result;



}