// Семинар. Циклы и массивы
// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(i + " - это ноль");
  } else if (i % 2 !== 0) {
    console.log(i + " - нечетное число");
  } else {
    console.log(i + " - четное число");
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
const sumArr = arr.reduce((a, b) => a + b);
const minArr = Math.min(...arr);
const hasThreeArr = arr.includes(3);
console.log("Массив:", arr);
console.log("Сумма элементов:", sumArr);
console.log("Минимальное число:", minArr);
console.log("Наличие числа 3:", hasThreeArr);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
for (let i = 1; i <= 20; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "x";
  }
  console.log(row);
}
