// Семинар. Основы JavaScript
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = prompt("Введите значение для переменной num1");
let num2 = prompt("Введите значение для переменной num2");
if (num1 <= 1 && num2 >= 3) {
  console.log("Условие выполняется");
} else {
  console.log("Условие не выполняется");
}

// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test === true ? console.log("+++") : console.log("---");

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = prompt("Введите число от 1 до 31");
if (day >= 1 && day <= 31) {
  console.log("Корректное число");
  if (day <= 10) {
    console.log("Первая декада месяца");
  } else if (day <= 20) {
    console.log("Вторая декада месяца");
  } else {
    console.log("Третья декада месяца");
  }
} else {
  console.log("Некорректное число");
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.

const userInput = prompt("Введите число:");
const hundreds = Math.floor(userInput / 100);
const tens = Math.floor((userInput % 100) / 10);
const units = userInput % 10;

console.log(`В числе ${userInput} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
