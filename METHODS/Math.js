let numberPI = 3.14;
let first = 1, second = 2, third = 3;
let maximum;
let minimum;
let mathPI;
let randNumber;

// numberPI = Math.round(numberPI); // Округляет до ближайшего числа (0.49 =>> 0); (0.5 =>> 1);
// numberPI = Math.floor(numberPI); // Округляет всегда вниз
// numberPI = Math.ceil(numberPI); // Округляет всегда вверх
numberPI = Math.pow(numberPI, 3); // Возводит число в степень
// numberPI = Math.sqrt(2); // Корень в степени от числа
// numberPI = Math.abs(numberPI); // Возвращает абсолютное значение числа (убираем -)

// maximum = Math.max(first, second, third); // находит максимальное число из переданных
// minimum = Math.min(first, second, third); // находит минимальное число из переданных

// randNumber = Math.random(); // random возвращает число от 0 до 1

mathPI = Math.PI; // Число ПИ

console.log({ numberPI, mathPI });
//console.log({ randNumber });
// console.log({ maximum, minimum });

// Функция округляет до ближайшего числа кратного делителю
const roundToMultiple = (num, multiple) => {
  return Math.round(num / multiple) * multiple;
}

console.log(roundToMultiple(16, 5)); // 15
console.log(roundToMultiple(26, 10)); // 30

// Как привести число с плавающей точкой к integer / How to make an integer from float
// 1.In ES6 => Math.trunc()
// 2.pasreInt => приводит к 10 системе счисления
// 3. Bitwise OR 

let trunc = Math.trunc(mathPI); // Отсекает всё что находится после точки
let truncParseInt = parseInt(mathPI, 10); // Приводит к 10 системе счисления
let bitwiseOr = mathPI | 0; // Отсекает все после точки => 3


console.log({ trunc, truncParseInt, bitwiseOr })

// How to check if number is integer not float
// 1. Number.isInteger(); 

let isInt = Number.isInteger(mathPI); // false

console.log({ isInt })

