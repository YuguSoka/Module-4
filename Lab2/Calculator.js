

let operator = '';

function setOperator(op) {
    operator = op;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Error: Invalid Input';
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
                break;
            default:
                result = 'Error: No operator selected';
        }
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}

function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = 'Result: ';
    operator = '';
}
