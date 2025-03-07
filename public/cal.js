"use strict";
let tela = document.querySelector('#display');
let icons = document.querySelectorAll('.operator');
let number = '';
let numberTwo = '';
let op = '';
let info = true;
tela.value = '0';
let newIcons = icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        if (number === '')
            return;
        op = e.target.innerHTML;
    });
});
function appendValue(e) {
    //first if
    if (info) {
        number = `${number}${e}`;
        tela.value = number;
        console.log(number);
    }
    else {
        numberTwo = `${numberTwo}${e}`;
    }
    //second if
    if (number.includes('+') || number.includes('-') || number.includes('*') || number.includes('/')) {
        info = false;
        tela.value = `${numberTwo}`;
    }
    if (numberTwo.includes('+') || numberTwo.includes('-') || numberTwo.includes('*') || numberTwo.includes('/')) {
        tela.value = `${numberTwo}`;
        calculate();
    }
}
function calculate() {
    if (number === '' || numberTwo === '')
        return;
    let intNumber = parseFloat((number));
    let intNumberTwo = parseFloat((numberTwo));
    let sum = `${intNumber} ${op} ${intNumberTwo}`;
    sum = eval(sum);
    tela.value = sum;
}
function clearDisplay() {
    number = '';
    numberTwo = '';
    op = '';
    tela.value = '0';
    info = true;
}
function backspace() {
    if (info) {
        number = number.slice(0, -1);
        tela.value = number;
        console.log(number);
    }
    else {
        numberTwo = numberTwo.slice(0, -1);
        tela.value = numberTwo;
    }
}
