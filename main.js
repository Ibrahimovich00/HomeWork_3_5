function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Введите оба числа";
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
                if (num2 === 0) {
                    result = "На ноль делить нельзя!";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Неизвестная операция";
        }
    }
    document.getElementById('result').innerText = `Результат: ${result}`
}

function calculatePower() {
    const base = parseFloat(document.getElementById('num1').value);
    const exponent = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(base) || isNaN(exponent)) {
        result = "Введите оба числа";
    } else {
        result = Math.pow(base, exponent);
    }
    document.getElementById('result').innerText = `Результат: ${result}`;
}

function calculateRoot() {
    const number = parseFloat(document.getElementById('num1').value);
    const degree = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(number) || isNaN(degree)) {
        result = "Введите оба числа";
    } else if (degree === 0) {
        result = "Степень не может быть нулем!";
    } else {
        result = Math.pow(number, 1 / degree);
    }
    document.getElementById('result').innerText = `Результат: ${result}`;
}