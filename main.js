

let cyclesSum = Number(prompt('введите количество вычислений которое Вы хотите сделать'));
while (cyclesSum) {
    
    let operandOne = Number(prompt('введите первый операнд'));
    let operator = prompt('введите оператор +, -, *, /');
    let operandTwo = Number(prompt('введите второй операнд'));

    if (operator === '+') {
        alert( `результат сложения = ${operandOne+operandTwo}` );
    } else if (operator === '-') {
        alert( `результат вычитания = ${operandOne-operandTwo}` );
    } else if (operator === '*') {
        alert( `результат умножения = ${operandOne*operandTwo}` );
    } else if (operator === '/') {
        alert( `результат деления = ${operandOne/operandTwo}` );
    } else {
        alert(`Мы не можем выполнить действие с оператором ${operator}`);
    }
    cyclesSum--;
}




