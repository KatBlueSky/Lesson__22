"use strict";
// ========Lesson 2 Youtube=================================
//========ДОМАШКА===========================================
//завдання 1
//console.log('учим JS')

//завдання 2
//console.log('JS')
//console.log('Учим')

//завання  3
// // нет точки с запятой
//console.log('Учим') console.log('JS')

//завдання 4
// //кавычка отсутсвует
//console.log('Учим);
//console.log('JS');



//================Lesson 3 Yuotube======================
///========================ДОМАШКА=====================
//задання 1
//let hisEyeColor = 'green';
//console.log(hisEyeColor);

//задання 2
//обьявляю змінну user
//обьявляю змінну userName
//присвоюю значення 'Вася' в userName
// let user;
// let userName = 'Вася';
// console.log(userName);
// user = 'Вася';
// console.log(user);

//задання 3
//Вариант 1
//let user = 'Петя'
//let age = 36
//!!НЕвіРНО немає розділення ; немає коми між інструкціями

//Вариант 2
//let myage = 36;
//!!НЕ совсем ВЕРНО нет lowersCamelCase

//Вариант 3
//const BLOCK_SIZE = 14 + 50;
//!!запис сталої константи через обчислювання
//!! НЕ совсем ВЕРНО

//Вариант 4
//const BLOCK_HEIGHT = 100;
//!!ВІРНО запис сталої інстркуції

//Вариант 5
// if (true) {
// 	var size = 15;
// }
// console.log(size);
//!!ВЕРНО в консолі буде 15. змінна видна замежами блоку


//================Lesson 4 Yuotube======================
//обявляю перменную
//let userName;
//userName = "Фриланцер по жизни ${userAge}";// String
//console.log(typeof userName);
//userName = 58; // Number

//undefined Пример
//let userName;
//console.log(typeof userName);
//console.log(userName);

//Null значение ничего
// let block = document.querySelector('.block');
// console.log(block);

// //boolean
// let willYouMarryMe = false;
// if (willYouMarryMe) {
//    console.log(':)');
// }
// else {
//    console.log(':(')
// }

//Number
//let userAge = 20;
//console.log(userAge);
//console.log(typeof userAge);
// let userHeight = 1.83;
// console.log(userHeight);
// console.log(typeof userHeight);
// //Nan
// let getNan = 'Фриланцер' / 10;
// console.log(getNan);
// console.log(typeof getNan);

//BidInt
//String
// let userAge = 27;
// let userAgeInfo = `Возраст: ${userAge}`;
// console.log(userAgeInfo);

//Object
//Symbol

//строковое преобразование
// let userAge = 85;
// console.log(userAge);
// console.log(typeof userAge);

// userAge = String(userAge);
// console.log(userAge);
// console.log(typeof userAge);

//================Lesson 4 Yuotube======================
//========Домашка================================
//Вариант 1
//let userAge = 36;
//let userAgeInfo = `Фриланцер ${userAge}`;
//console.log(userAgeInfo);
//!Неверно обернути кавычки


//Вариант 2
//let userHeight = 145 / 0;
//console.log(userHeight);
//!НЕВЕРНо  не Nan, а буде Infiniti

//Вариант 3
let userName;
console.log(typeof userName);
//!Неверно тип даных undefined

//Вариант 4
let userSize = "45" / "8";
console.log(typeof userSize);
//!Все ОК


//Операторы Lesson__3
// Бинарные  оператор
// let userAge = 30 - 6;
// унарный оператор
// let userHeight = 180;
// операторы слоэеные умножение деления
// Возможности операторов
// Складывание строк
//let resultTwo = 'Фриланцер по жизни' + 58;
//console.log(resultTwo);
//вычитание
// let resultOne = '25' - 5;
// console.log(resultOne);
// выводим тип даных
// console.log(typeof resultOne);

// умножение
//let resultTwo = "10" * 80;
// console.log(resultTwo);
// выводим тип даных
// console.log(typeof resultTwo);

//недопустимая операция
// let resultThree = 3 * "Фриланцер";
// console.log(resultThree);
// console.log(typeof resultThree);


//Унарный оператор сложения
// со строками
// let users = "25";
// let admin = "25";

// console.log(users + admin);
// //получаем строку 2525
// console.log(+users + +admin);
// // получим число 50

// // с числами
// console.log(Number(users) + Number(admin));
// // получим число 50

// Приоритет
// 1. Как в школе умножение и деление преоритетнее чем сложение
// 2. скобки приоретнее
// + или - по прядку слева направо

// Оператор присвоение
// тут плохая читабельность кода!!!
// let a = 1 + 2;
// let b = 2;
// let result = 8 - (a = b + 3);
// console.log("Результат в скобках: " + a);
// console.log("Общий результат: " + result);

// Присвоение по ципочке

// let resultOne = 1 + 2;
// resultTwo = resultOne;
// resultThree = resultTwo;

// console.log(resultOne);
// console.log(resultTwo);
// console.log(resultThree);

// С помощю присвоение мы можем запсывать простые вычисления
// let users = 5;
// users = users + 3;
// users = users * 2;
// можно записать и так

// let users = 5;
// console.log(users);
// users += 3;
// console.log(users);
// users *= 2;
// console.log(users);


// Инкремент ++
// let addUser = 2;
// addUser++;
// console.log(addUser);

// // Декримент--
// let upUser = 2;
// upUser--;
// console.log(upUser);
// Примеры
// Постфиксная форма
// let userCounter = 0;
// let newUsers = userCounter++;
// console.log(newUsers);

// Префиксная форма
// let userCounter = 0;
// let newUsers = ++userCounter;
// console.log(newUsers);

// Инкремент или декримент будем всегда приоритетнее чем фобычное фрифметическое выражение, сначала 0+1 а оптом *2 будет 2
// let userCounter = 0;
// let newUsers = 2 * ++userCounter;
// console.log(newUsers);

// Оператор запятая даем возмодность вычеслять сразу несколько выражения разделяя их запетой
// let usersCounter = (8 + 2, 19 + 1);
// console.log(usersCounter);
// результат будет последний

// побитовый оператор в криптографии
//

// ОПЕРАТОРЫ сравнения
// операторы сравнения выражают логический тип даных true или false
// console.log(2 > 1);
// console.log(4 < 2);
// console.log(58 == 36);
// console.log(8 != 9);

// let result = 11 > 10;
// console.log(result);

// сравнение строк
// 1. Алфаыитный порядок
// 2. К-во символов
// // 3. Регистр
// // !!Важно маленькие буквы БОЛЬШЕ чем большые

// // Сравнение ражзных типов даных
// // JS приводит таких даные  в число true становиться  1, а false 0
// console.log('58' > 10);
// console.log('007' == 7);
// console.log(true == 1);
// console.log(false == 0);

// // Интересный пример
// let itemA = 0;
// let itemB = "0";
// // приобразовываем в логический тип даных
// console.log(Boolean(itemA));
// console.log(Boolean(itemB));
// console.log(itemA == itemB);

// Строгое выравнивание
// проверяет равенство без приведение типов
// console.log(0 === false);
// // не равна
// console.log('007' === 7);
// // не равна
// console.log('58' !== 58);

// Строгое равенство null undefinden
// проверяет равенство без приведение типов
// console.log(0 === false);
// // не равна
// console.log('007' === 7);
// не равна
// console.log('58' !== 58);

// Приобразование к числам
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);

// // Сравнение undefined и 0
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// Логические операторы
// Оператор ИЛИ
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// Булевые значения
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// // Пример с разными типами даных
// console.log('Фриланцер' && 0 && 2 && 3);
// console.log(1 && 2 && null && 3);
// console.log('15' && '42');

// Приоритет оператор И && и ИЛИ ||

// Логический оператор НЕ !!!
// 1. Сначала привоит аргумент к логическому типу true / false
// 2. Возвращает противоположное значение

// Булевые значение
// console.log(!null);
// console.log(!1);
// console.log(!'');
// console.log(!'фриланцер');

// Приоритет опаратоа НЕ самый виший и он выполняется самым первым!!!
// console.log(!true && 58 || 18 && !1);

// Оператор обьединение с null ??
// Пример
// let name = 'Фриланцер';
// console.log(name ?? "Без имени");

// ----------ДОМАШКА по Операторам
// Вариант 1
// console.log('35' + - "22");
// Не верно 35-22

// Вариант 2
// console.log('35' * "22");
// Верно

// Вариант 3
//  console.log('558' > 22++);
// Помилка

// Вариант 4
//   let userCounter = 0;
//  let newUsers = userCounter++;
// console.log(newUsers);
// // Не верно, відповідь 0

// // Вариант 5
// console.log(!false && 11 || 18 && !'');
// // ответ 11

// // Вариант 6
// let name = 0;
// console.log(name ?? "Без имени");
// // 0


// Лекция 5
// задаем перменную
// let message = "Привет, фриланцер!";
// // условие если 2 больше 1
// // то переменная выводится в консоль
// if (3 > 1) {
//    console.log(message);
// }

// пример с использованием переменной в условии
// let message = "Привет, фриланцер!";
// let first = 5;
// let second = 5;
// // // условие если 5 ровно 10, это ложь код не выполняется
// // // условие если 5 ровно 5, это правда код не выполняется
// if (first === second) {
//    console.log(message);
// }

// Пример более сложного условыя с логическими операторами
// let message = "Привет, фриланцер!";
// // условие если 5 ровно 10, это ложь код не выполняется
// // условие если 5 ровно 5, это правда код не выполняется
// if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
//    console.log(message);
// }

// Приобразование в булевый тип
// Код выполняется только если выражение в скобках вернет true
// let message = "Привет, фриланцер!";
// if ("")
// тут пустая строка это false поэтому код не выполняется
// но если есть хотя бы пробел в строке, то код будет выполнен
// тоже самое с 0 false
// 1 это true
// {
//    console.log(message);
// }

// короткая запись
// код выполняется если только
// выражение в скобках вернет true
// let message = "Привет, фриланцер!";
// if (2 > 1) console.log(message);


// Если условие внутри круглых скобок прадa, то условие выполняется
// если там лож условие не выполняеться, тогда выполняется необезательный блок ELSE
// НЕОБЕЗАТЕЛЬНЫЙ БЛОК else
// let message = "Привет, фриланцер!";
// let number = 5;
// if (number > 3)
// {
//    console.log(message);
// }
// else {
//    console.log('Условие не выполнено :(')
// }

//  БЛОК else if
// позволяет проверить несколько условий
// let message = "Привет, фриланцер!";
// let number = 5;
// if (number > 50) {
//    console.log('5 больше 50');
// }
// else if (number > 30) {
//    console.log('5 больше 30');
// }
// else if (number > 10) {
//    console.log('5 больше 10');
// }
// else if (number > 1) {
//    console.log('5 больше 1');
// }
// else {
//    console.log('Opps fuck');
// }


//  Условный оператор ?
// let message = "Привет";
//  let messageEnd;
//  if (5 > 1) {
//    messageEnd = ", Вася!";
// } else {
//    messageEnd = ", Оля!";
// }

// короткая запись
// обявлеем перемнную
// let messageEnd = (5 > 1)
// если 5 больше 1, если условие выполняется то выводится ", Вася!"
// если не выполняется то ", Оля!";
// : заменяет else  ? ", Вася!" : ", Оля!";
// message += messageEnd;
// console.log(message);


// с помощю ? можно записывать короткие записи условий else else if
// эта запись более класическая
//  let message = "Привет";
// let messageEnd;

// if (5 > 50) {
//    messageEnd = ", Вася!";
// }
// else if (5 > 30) {
//    messageEnd = ", Ilga!";
// }
// else if (5 > 10) {
//    messageEnd = ", Cooper!";
// }
// else if (5 > 1) {
//    messageEnd = ", Uta!";
// }
// else {
//    messageEnd = ", Alfi!";
// }
// // // прописываем как мы обьединяем переменные
// message += messageEnd;
// console.log(message);

// менее класическая запись
// let message = "Привет";
// let messageEnd;

// messageEnd = 5 > 10 ? ", Вася!" :
//    5 > 30 ? ", Olga!" :
//       5 > 10 ? ", Cooper!" :
//          5 > 15 ? ", Cooper!" : ", Uta!"
// message += messageEnd;
// console.log(message);

// ===========Домашка Лекция If ELSE ELSE if
// Какой из вариантов вернет в консольслово истина
//Вариант 1
// if (1 === "1") {
//    console.log('Истина!');
// } else {
//    console.log('Ложь!');
// }
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 2
// if (5 === "5") {
//    console.log('Истина!');
// } else {
//    console.log('Ложь!');
// }
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 3
// let message = (92 < '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message);
// ответ Ложь! НЕВЕРНО!!!!

//Вариант 4
// if (0) {
//    console.log('Ложь!');
// }
// else if (" ") {
//    console.log('Истина!');
// }
// ответ Истина! ВЕРНО!!!!


// ========Цикл while
// let num = 0;
// условие
// while (num < 5)
// это true  {
//    console.log(num);
// збільшуемо значення на одиницю
//    num++;
// }

// облегченный вариант записи
// let num = 0;
// while (num) console.log(num++);

// Конструкция DO WHILE
// let num = 0;
// do {
//    console.log(num);
//    num++;
// }
// while (num < 0);


// Цикл FOR
// for (начало; условие; шаг) {
//    тело цикла
// }

// Пример
// let num = 0
// for (let num = 0; num < 5; num++) {
//    console.log(num);
// }
// console.log('Вывод вне цикла ')
// Работа цикла
// Віполняется начало цикла - - let num = 0;
//

// Можно убрать любую часть цикла
// let num = 1;
// for (; num < 5;) {
//    console.log(num);
//    num++;
// }

// Деректива break
// let num = 0;
// for (; num < 5; num++) {
//    console.log(num);
//    if (num == 2) break;
// }
// console.log('Работа окончена, num = ${num}')

// Деректива countinue
// let num = 0;
// for (; num < 5; num++) {
//    if (num == 2) continue
//    console.log(num);
// }

// Деректива countinue/break мы не исползуем с оператором "?"
// let num = 0;
// for (; num < 5; num++) {
//    (num != 2) ? console.log(num) :continue;
// }
// тут будет ошибка


// Метки
// firstFor:
// for (let num = 0; num < 2; num++) {
//    // дочерний цикл
//    for (let size = 0; size < 3; size++) {
//       if (size == 3) {
//          // метка
//          break firstFor;
//       }
//       console.log(size);
//    }
// }


// ==========ДОМАШКА Лекция ЦИКЛИ
// Задача 1
// вывести числа 1 до 5 всеми циклами которые мы сегодня изучили
// конструкция цикла while
// let num = 0;
// while (num < 5) {
//    console.log(num);
//    num++;
// }
// конструкция цикла do while
// let num = 0;
// do {
//    console.log(num);
//    num++;
// } while (num < 5);

// конструкция цикла for
// for (let num = 0; num < 5; num++) {
//    console.log(num)
// }

// Задача 2
// let num = 8;
// while (num) {
//    console.log(num);
//    num--;
// }
// !!!НЕВЕРНО ПОСЛЕДНИЙ РЕЗУЛЬТАТ 1

// Задача 3
// переписать на while
// for (let num = 0; num < 3; num++) {
//    console.log('Число : ${num}');
// }

// !!!
// let num = 0;
// while (num < 3) {
//    console.log(num);
//    num++;
// }

// Задача 4 Прекратить работу цикла1 когда size равно 1
// метка
// firstFor:
// // цикл 1
// for (let num = 0; num < 2; num++) {
//    // цикл 2
//    for (let size = 0; size < 3; size++) {
//       // если size ровно 1 прекратить
//       if (size == 1) {
//          break firstFor;
//       }
//       console.log(size);
//    }
// }
//  !!!0


// Лекция Функции

// 2 способа создания фукций
// Обьявленеи функции
// Строуние фынкционального выражение
// ОБЬЯВЛЕНИЕ ФУНКЦИИ
// function showMessage() {
//    console.log('Сообщение!!');
// }
// // запускаем функцию
// showMessage();
// showMessage();

// Вложеность и видимость функции
// function getSumm() {
//    // обьявляем переменные
//    let numOne, numTwo;
//    // обьявляем функцию
//    function getNumOne() {
//       numOne = 1;
//    }
//    function getNumTwo() {
//       numTwo = 2;
//    }

//    getNumOne();
//    getNumTwo();

//    let numSumm = numOne + numTwo;
//    console.log(numSumm);
// }

// getSumm();
// // нельзя вызвать дочернею функциюза пределами родительской функции
// getNumOne();

// Локальные и внешние пременные
// let globalVar = "Я глобальная ";
// // внешняя переменая
// let message = "сообщение 1";

// function showMessage() {
//    // локальная переменная
//    let message = "Сообщение 2";
//    console.log(message);
// }
// console.log(globalVar);
// console.log(message);
// showMessage()

// Параметры (аргументы)
// function calcSumm(numOne = 1, numTwo = 2) {
//    console.log(`Переменная numOne:${numOne}`);
//    console.log(`Переменная numTwo:${numTwo}`);

//    let numSumm = numOne + numTwo;
//    console.log(`Сума:${numSumm}`);
// }
// // выводим функцию
// calcSumm();

// функция callBack
// function calcSumm(numOne, numTwo, more, less) {
//    let numSumm = numOne + numTwo;
//    if (numSumm > 3) {
//       more();
//    } else {
//       less();
//    }
// }

// function showMoreMessage() {
//    console.log('Больше чем 3');
// }
// function showLessMessage() {
//    console.log('Менше чем 3');
// }

// // выводим функцию
// calcSumm(1, 1, showMoreMessage, showLessMessage);
//

// Директива return
// function calcSumm(numOne, numTwo) {
//    let numSumm = numOne + numTwo;
//    return numSumm;
//    //  return ; тепер в консоль выведется undefinden
// }

// let funcRezult = calcSumm(1, 2);
// console.log(`Сума: ${funcRezult}`);

// Рекурсия
// function calcSumm(numOne, numTwo) {
//    if (numTwo === 1) {
//       return numOne;
//    }
//    else {
//       return numOne * calcSumm(numOne, numTwo - 1);
//    }
// }
// console.log(calcSumm(2, 3));

// Функциональные выражение

// let showMessage = function () {
//    console.log('Привет!!!');
// };
// showMessage();

// function getSumm() {
//    let summ = 1 + 2;
//    console.log(summ);
// };
// let someVar = getSumm;

// someVar();
// getSumm();
// ============================
// let getSumm;
// if (2 > 1) {
//    getSumm = function () {
//       let summ = 1 + 2;
//       console.log(summ);
//    };
// }
// getSumm();

//==========стрелочная функция (arrow function)
// let getMessage = (text, name) => text + ', ' + name + '!';
// console.log(getMessage('Привет', 'Вася'));

// ================многострочная стелочная функция
// let getMessage = (text, name) => {
//    let message = text + ', ' + name + '!';
// return message;}
// console.log(getMessage('Привет', 'Вася'));

// Планирование вызова функции
// setTimeout();
// setInterval();

// function showMessage(text, name) {
//    console.log(`${text},${name}!`)
// }
// setTimeout(showMessage, 2000, 'Привет', 'Вася');
// setInterval(showMessage, 500, 'Привет', 'Вася');

// ==========
// function showNumber(num) {
//    console.log(num);
//    if (num < 5)
//       setTimeout(showNumber, 1000, ++num);
// }

// clearTimeout
// function showNumber(num) {
//    console.log(num);
//    let timeId = setTimeout(showNumber, 1000, ++num);
//    if (num === 6) {
//       clearTimeout(timeId);
//    }
// }
// setTimeout(showNumber, 1000, 1);

// Пример функции
// function createMessage(text, name) {
//    return `${text}, ${name}!`
// }

// function showMessage(message) {
//    console.log(message);
// }

// function initMessage(text, name) {
//    showMessage(createMessage(text, name));
// }
// initMessage('Привет', 'Фриланцер');

// =======Домашка по функциям
// задача 1
// function showName() {
//    console.log('Вася!')
// }
// setTimeout(showName, 0);
// console.log('Коля');
// !Ответ Коля, потому что setTimeout

// задача 2
// showMessage();
// function showMessage() {
//    console.log('сообщение')
// }
// !!!да не имеет значения где задана функция Обьявление функции


// задача 3
// let showMessage = function () {
//    console.log('сообщение');
// }
// showMessage();
// !!! НЕВЕрно при функциональном выражении
// обьязательно значала обьявляем функцию имеет значения где задана функция Обьявление функции

// задача 4
// 'use strict'
// // обьявляем функцию
// let showMessage;
// // !!!если 2 больше 1 то в консоль выводим сообщение
// if (2 > 1) {
//    showMessage = function () {
//       console.log('сообщение');
//    }
// }
// showMessage();



// =========================ЛЕКЦИЯ ПО числам


// милион
// let someBigNum = 1e6; //1* 1000000;
// console.log(someBigNum);
// // маленкая числа
// let someLittleNum = 1e-6; //1 / 1000000;
// console.log(someLittleNum);
// // метод toString(base)

// 16тиричная система чисел
// для кодировки цвета и кодировки символов
// console.log(0xFF);
// console.log(0b11111111);
// console.log(0o377);
// // 2ичная система чисел
// // 8миричная система чисел
// // toString
// let num = 255;
// console.log(num.toString(16));
// console.log(num.toString(8));
// console.log(num.toString(2));

// округление чисел в меншую сторону
// math.floor
// let numOne = Math.floor(5.8);
// let numTwo = Math.floor(2.2);
// let numThree = Math.floor(-2.2);
// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);

// округление чисел в большую сторону
// math.floor
// let numOne = Math.ceil(5.8);
// let numTwo = Math.ceil(2.2);
// let numThree = Math.ceil(-2.2);
// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);

// округление чисел до ближайшего целого
// math.round
// let numOne = Math.round(5.8);
// let numTwo = Math.round(2.2);
// let numThree = Math.round(-2.2);
// console.log(numOne);
// console.log(numTwo);
// console.log(numThree);


// как нам получить 5.8 или 5.85?
// Способ умножение и деления
// let numOne = Math.round(5.845 * 10) / 10;
// console.log(numOne);

// let numTwo = Math.round(5.845 * 100) / 100;
// console.log(numTwo);

// let numThree = Math.round(5.8449 * 100) / 100;
// console.log(numThree);

// // toFixed
// let numFor = 5.845;
// // получаем строку 5.8
// console.log(numFor.toFixed(1));
// // преобразовываем число в строку c унарным операторм сложения
// console.log(+numOne.toFixed(1));

// // преобразовываем число в строку c специальной функцией Number
// console.log(Number(numOne.toFixed(1)));

// Проблема неточный вичеслений
// let numOne = Math.round(1.005 * 100) / 100; //ОЖИДАЕМ 1.01
// console.log(numOne);

// let numTwo = 12.35; //ожидаем 12.4
// console.log(numTwo.toFixed(1));

// //
// let problem = 0.1 + 0.2 === 0.3;
// console.log(problem);
// // Почему?
// // console.log(0.1 + 0.2);

// решение с помощю Number.EPSILON

// let sourceNum = 1.005 + Number.EPSILON;
// let numFour = Math.round(sourceNum * 100) / 100;
// console.log(numFour);

// console.log(sourceNum * 100);
// console.log(Math.round(sourceNum * 100));

// isFinite isNan
// console.log(Number(25 + "Привет!"));
// //Проверка будет true
// console.log(isNaN(25 + "Привет!"));
// !!!Важно NaN уникальное значение и NaN никогда не ровно NaN

// Способ проверки
// if (25 + "Привет" !== NaN) {
//    console.log('Я не NaN')
// }
// console.log('NaN === NaN')

// Проверка isFinite
// преобразует аргумент в число и возвращает true усли оно является обычным числом
// console.log(isFinite("25"));
// console.log(isFinite("Привет!"));
// console.log(isFinite(10 / 0));

// parseInt parseFloat
// преобразовываем строку в чмсло с помощю унарного оператора сложения либо специальной функции Number
// let valueOne = +"150";
// console.log(valueOne);
// console.log(typeof valueOne);

// Значение где указывается единица измерения
// let valueOne = parseInt("150.58px");
// console.log(valueOne);
// console.log(typeof valueOne);

// let valueTwo = parseFloat("a150.58px");
// console.log(valueTwo);
// console.log(typeof valueTwo);

// для получения чисел из такой строки существуют parseInt и ParseFloat.
// console.log(parseInt('oxff', 16));
// console.log(typeof valueTwo);

// Обьект Math возвращает псевдослучайное чмслов диапозоне от 0 до 1(не включая 1)
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// Обьект Math.max matj min возвращает найбольшое
//  число из перечисленых документов
// console.log(Math.max(5, 85, -59));
// console.log(Math.min(5, 85, -59));


// Обьект Math.a b c  возвращает абсолютное значение числа
// console.log(Math.abs(-59));

// Обьект Math.pow  число в степени pow
// console.log(Math.pow(5, 8));

// ================ДОМАШКА
// задача 1 Получить верное значение округления
// let numOne = Math.round(1.005 * 100) / 100;
// console.log(numOne);

// Ответ
// let sourceNum = 1.005 + Number.EPSILON;
// let numOne = Math.round(sourceNum * 100) / 100;
// console.log(numOne);
//  !!!1.01

// Задача 2
// получить число из строки
// let value = "135.58px";
// let valueOne = parseFloat("135.58px");
// console.log(valueOne);

// // Задача 3
// // Построить верное условие ветвления
// let value = "135.58px";
// if (58 + "Фриланцер" !== NaN) {
//    console.log('Результат выражения NaN');
// }

// // Задача 4 найти максимальное число
// console.log(Math.max(10, 58, 39, -150));

// // Задача 5 Округлить число
// // Округление числа в меньшую сторону Math.floor
// let numTwo = Math.floor(58.858);
// console.log(numTwo);
