let numberDays = 0;
let numberMonths = 0;
let numberYears = 0;

const dataAtual = new Date();
const anoFim = dataAtual.getFullYear();
const mesFim = dataAtual.getMonth() + 1;
const diaFim = dataAtual.getDate();

function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day); // month is zero-indexed in Date constructor
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

function calcNumber(anoInicio, mesInicio, diaInicio, anoFim, mesFim, diaFim) {
    // Cria as datas usando os objetos Date
    const dataInicio = new Date(anoInicio, mesInicio - 1, diaInicio); // O mês começa do zero (janeiro = 0)
    const dataFim = new Date(anoFim, mesFim - 1, diaFim); // O mês começa do zero (janeiro = 0)

    // Calcula a diferença em milissegundos entre as datas
    const diferencaMs = dataFim - dataInicio;

    // Converte a diferença de milissegundos para dias
    const diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);

    // Arredonda para baixo para garantir um resultado inteiro
    numberDays = Math.floor(diferencaDias);

    numberMonths = Math.floor((anoFim - anoInicio) * 12 + (mesFim - mesInicio));

    numberYears = anoFim - anoInicio;
}

function mostraValores(){
    document.querySelector('.y-numb').textContent = numberYears;
    document.querySelector('.m-numb').textContent = numberMonths;
    document.querySelector('.d-numb').textContent = numberDays;
}

function validaInputs() {
    const dayInput = document.querySelector('#day__input');
    const monthInput = document.querySelector('#month__input');
    const yearInput = document.querySelector('#year__input');

    const dayTitle = document.querySelector('.day__title');
    const monthTitle = document.querySelector('.month__title');
    const yearTitle = document.querySelector('.year__title');

    const lightRed = 'hsl(0, 100%, 67%)';
    const lightGrey = 'hsl(0, 0%, 86%)';
    const smokeyGrey = 'hsl(0, 1%, 44%)';

    let isValid = true;

    if (!dayInput.value) {
        dayInput.style.borderColor = lightRed;
        dayTitle.style.color = lightRed;
        isValid = false;
    } else {
        dayInput.style.borderColor = lightGrey;
        dayTitle.style.color = smokeyGrey;

    }

    if (!monthInput.value) {
        monthInput.style.borderColor = lightRed;
        monthTitle.style.color = lightRed;
        isValid = false;
    } else {
        monthInput.style.borderColor = lightGrey;
        monthTitle.style.color = smokeyGrey;

    }

    if (!yearInput.value) {
        yearInput.style.borderColor = lightRed;
        yearTitle.style.color = lightRed;
        isValid = false;
    } else {
        yearInput.style.borderColor = lightGrey;
        yearTitle.style.color = smokeyGrey;
    }

    return isValid;
}

document.querySelector('.calculator__button').onclick = function () {
    const day = parseInt(document.querySelector('#day__input').value);
    const month = parseInt(document.querySelector('#month__input').value);
    const year = parseInt(document.querySelector('#year__input').value);

    if (validaInputs() && isValidDate(year, month, day)) {
        calcNumber(year, month, day, anoFim, mesFim, diaFim);
        mostraValores();
    }
};
