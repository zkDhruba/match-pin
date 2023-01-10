function getFourDigit() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getFourDigit();
    }
}

function generatePin() {
    const pin = getFourDigit();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = (event.target.innerText);
        const calcInput = document.getElementById('typed-number');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }

    });

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
};