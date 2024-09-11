//Задание 1

let password = `пароль`;
let passwordUser = prompt (`Введите пароль`);

if (passwordUser === password) {
    console.log(`Пароль введен верно`);
} else {
    console.log(`Пароль введен неправильно`);
}

//Задание 2

let c = Number(3);

if (c > 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

 c = 0;

 if (c > 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

c = 10;

if (c > 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

c = -3;

if (c > 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

c = 2;

if (c > 0 && c <= 10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

//Задание 3

let d = 10000;
let e = 5;

if (d || c > 100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

//Задание 4

let aAa = '2';
let bBb = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
let f = Number(aAa);
let g = Number(bBb)
alert(f + g);

//Задание 5
let monthNumber = 12; 
switch (monthNumber) {
    case 1:
        console.log (`Зима`);
        break;
    case 2:
        console.log (`Зима`);
        break;
    case 3:
        console.log (`Весна`);
        break;
    case 4:
        console.log (`Весна`);
        break;
    case 5:
        console.log (`Весна`);
        break;
    case 6:
        console.log (`Лето`);
        break;
    case 7:
        console.log (`Лето`);
        break;
    case 8:
        console.log (`Лето`);
        break;
    case 9:
        console.log (`Осень`);
        break;
    case 10:
        console.log (`Осень`);
        break;
    case 11:
        console.log (`Осень`);
        break;
    case 12:
        console.log (`Зима`);
        break;
    default:
        console.log (`Такого месяца не существует`);
        break;
}
