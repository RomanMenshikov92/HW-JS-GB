// Семинар. Знакомство с функциями в JavaScript
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function calculateCube(number) {
  const result = Math.pow(number, 3) + Math.pow(3, 3);
  console.log(result);
}
calculateCube(2);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
function calculateSalary() {
  const numberSalary = prompt("Введите число своей зарплаты:");
  if (isNaN(numberSalary)) {
    console.log("Значение задано неверно. Вы ввели текст, а не число!");
  } else {
    const totalSalary = numberSalary * 0.87;
    console.log("Размер заработной платы за вычетом налогов равен значение: " + totalSalary);
  }
}
calculateSalary();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
function findMax(number1, number2, number3) {
  return Math.max(number1, number2, number3);
}
const input1 = parseInt(prompt("Введите первое число:"));
const input2 = parseInt(prompt("Введите второе число:"));
const input3 = parseInt(prompt("Введите третье число:"));
const maxNumber = findMax(input1, input2, input3);
console.log("Максимальное число из введенных вами чисел: " + maxNumber);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
function sumNumber(a, b) {
  return a + b;
}
console.log(sumNumber(2, 6));

function diffNumber(a, b) {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
console.log(diffNumber(6, 2));

function multiplyNumber(a, b) {
  return a * b;
}
console.log(multiplyNumber(2, 6));

function divideNumber(a, b) {
  return a / b;
}
console.log(divide(6, 2));
