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
        console.log(event.target.innerText);
    });