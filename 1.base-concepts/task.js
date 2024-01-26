// Задача №1
"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (discriminant === 0) {
    const x = -b / (2 * a); 
    arr.push(x);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}

// Задача №2
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразование процентной ставки в диапазон от 0 до 1
    percent = parseFloat(percent);
    if (isNaN(percent) || percent < 0 || percent > 100) {
        return false;
    }
    percent /= 100;

    // Преобразование начального взноса, суммы кредита и срока в числа
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseFloat(countMonths);

    // Проверка на корректность введенных чисел
    if (isNaN(contribution) || isNaN(amount) || isNaN(countMonths) || contribution < 0 || amount <= 0 || countMonths <= 0) {
        return false;
    }

    // Расчет тела кредита
    const loanBody = amount - contribution;

    // Расчет месячной процентной ставки
    const monthlyPercent = percent / 12;

    // Расчет ежемесячного платежа по формуле
    const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

    // Расчет общей суммы, которую придется заплатить клиенту
    const totalAmount = monthlyPayment * countMonths;

    // Округление до двух знаков после запятой
    const roundedTotalAmount = Math.round(totalAmount * 100) / 100;

    return roundedTotalAmount;
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52
