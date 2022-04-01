function Calculator() {

    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];

}

Calculator.prototype.isCorrectAction = function (action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function () {
    return this.history.join('\n');
}

Calculator.prototype.add = function (num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;

    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
        result = number1 + number2;
        this.history.push(number1 + ' + ' + number2 + ' = ' + result);
        return result;
    }
    // 1. zamień wartości przekazane przez parametr na typ number
    // 2. sprawdź czy są one poprawne
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
}

Calculator.prototype.subtract = function (num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;
    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
        result = number1 - number2;
        this.history.push(number1 + ' - ' + number2 + ' = ' + result);
        return result;
    }


}

Calculator.prototype.divide = function (num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;
    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
        result = number1 / number2;
        this.history.push(number1 + ' / ' + number2 + ' = ' + result);
        return result;
    }


}

Calculator.prototype.multiply = function (num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;
    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
        result = number1 * number2;
        this.history.push(number1 + ' * ' + number2 + ' = ' + result);
        return result;
    }
}

Calculator.prototype.magnify = function (num1, num2) {
    const number = Number(num1);
    const power = Number(num2);
    let result = 1;
    if (!Number.isNaN(number) && !Number.isNaN(power)) {
        for (let i = 0; i < power; i++) {
            result *= number;
        }
        this.history.push(number + ' ^ ' + power + ' = ' + result);
        return result;
    }
}



const calc = new Calculator();

let action, promptContent, isCorrectAction, number1, number2;

do {

    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);

    if (isCorrectAction) {


        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if (action === '+') {
            calc.add(number1, number2);
        }
        else if (action === '-') {
            calc.subtract(number1, number2);
        }
        else if (action === '/') {
            calc.divide(number1, number2);
        }
        else if (action === '*') {
            calc.multiply(number1, number2);
        }
        else if (action === '^') {
            calc.magnify(number1, number2);
        }


    }

} while (calc.isCorrectAction(action));