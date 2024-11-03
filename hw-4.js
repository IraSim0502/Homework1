//Задание 1
for (let welcome = 0; welcome < 2; welcome++) {
    console.log(`Привет!`);   
}

//Задание 2

for (let bringOut = 1; bringOut <= 5; bringOut++) {
    console.log(bringOut);
}

//Задание 3

for (let bringOut1 = 7; bringOut1 <= 22; bringOut1++) {
    console.log(bringOut1);
}

//Задание 4

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key} - ${obj[key]}`);
    
}

//Задание 5
let n = 1000;

let num = 0

while (n >=50) {
    n /= 2;
    console.log(n);
    num++;
}

console.log( `Количество циклов: ${num}`);

//Задание 6

let dayFriday = 5;

let allDay = 31;

for (let index = dayFriday; index <= allDay; index += 7) {
    console.log(`Сегодня пятница, ${index}-е число. Необходимо подготовить отчет.`);
}

//Доп.Задание 1

let k = 100;

let interation = 0

while (k >=0) {
    k -= 7;
    console.log(k);
    interation++;
}

console.log( `Количество циклов: ${interation}`);

//Доп.Задание 2

const month = {
    'Январь' : '1',
    'Февраль' : '2',
    'Март' : '3',
    'Апрель' : '4',
    'Май' : '5',
    'Июнь' : '6',
    'Июль' : '7',
    'Август' : '8',
    'Сентябрь' : '9',
    'Октябрь' : '10',
    'Ноябрь' : '11',
    'Декабрь' : '12'
}

for (let key in month) {
    console.log(`${key} - ${month[key]}`);
    
}

//Доп.Задание 3

const book = {
    name: 'Война и мир',
    author: 'Л.Н. Толстой',
    publication: '1867г.',
    genre: 'Роман-эпопея'
}

for (const key in book) {
    console.log(`${key} - ${book[key]}`);
}

