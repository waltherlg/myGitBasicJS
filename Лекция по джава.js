//Лекции по джава
/*Поскольку базовые курсы JS в разных источниках отличаются:
В каких то объяснения не полные, в других непоследовательные, 
в третьих важные моменты упущены, 
в четвертых выясняются свойства каких то функций 
которых небыло в первых трех...
Короче при конспекте в тетради начала получатся каша.
Поэтому решил вести конспект прям в Visual Studio, 
Благодоря "разноцветному" коду легко читается, и можно скопировать
в ворд например, с сохранением цветов.


/*Комментарии — это строки кода, 
которые JavaScript игнорирует, нужны для заметок.
Есть два способа написать комментарий:
    1 - // это если комментарий идет в одной строке*/
    
/*2 если комментарий идет в несколько строк
    выделяем его этими знаками коммент */

/* JavaScript имеет восемь типов данных : 
undefined, - неопределено
null, - нуль (можно использовать чтоб указать что в данный момент значения нет)
boolean, - логический тип (true и false)
string, - строки
symbol, - символ
bigint, 
number - число
object.*/

// ПЕРЕМЕННЫЕ - позволяют динамически хранить у управлять данными.
//переменные можно присвоить с помощью:
var
let
const
//пример:
var myAge; // мы объявили переменную myAge

// переменной можно присвоить значение с помощью =
myAge = 35; /* переменная myAge имеет значение 35, 
при присваивании чилового значения, переменная автоматически
имеет тип числовой тип данных "number"*/

// одной переменной можно присвоить значение другой переменной
bestAge = myAge; // переменная bestAge будет иметь значение 35

// переменной можно присвоить значение сразу при объявлении:
var myName = "Ruslan"; /*значение в ковычках - строки*/ 

// для JS это не одно и тоже:
string = "35";
noString = 35;

// JavaScript чувствителен к регистру:
MYVAR
MyVar
myvar
//эти разные переменные.

// Разница между var let const
var myVar = 5; /* если объявить с помощью var
то можно будет снова обявить переменную с этим же именем
даже с другим значением: */
var myVar = 7; // 
console.log(myVar); // выведет 7

let myVar = 5; /* если обявить с помощью let, 
то мы не сможем еще раз обявить переменную с таким именем*/
let myVar = 8; // выдаст ошибку, что такая переменная уже есть. ОДНАКО!
myVar = 8; // изменит переменную myVar на 8

const myVar = 5; /* при объявлении с помощью const, 
нельзя ни объявить еще раз переменную с таким именем, 
ни изменить значение переменной */
const myVar = 8; // выдаст ошибку
myVar = 8; // выдаст ошибку

// Number - числовые данные

+ // сложение
const myVar = 5 + 10; 

- // вычетание 
const myVar = 12 - 6; // myVar будет иметь значение 6.

* // умножение
const myVar = 13 * 13; // myVar будет иметь значение 169.

/ // деление
const myVar = 16 / 2; // myVar теперь имеет значение 8.

% // остаток от деления
5 % 2 = 1, /* потому что    (5 / 2) = 2 (частное)
                            2 * 2 = 4
                            5 - 4 = 1 (остаток) */
//Числа могут быть десятичными (числа с плавающей точкой)
const ourDecimal = 5.7;
// с этими числами можно делать все тоже самое что и с обычными.

// Изменения чисел

// увеличение числа:
i++; // повышает значение i на единицу
i = i + 1; // тоже самое что и i++

// уменьшение числа:
i--; // уменьшает значение на i на единицу
i = i - 1; // тоже самое что и i--

// Значения переменной можно так же изменить на желаемое число:

+= // повысит значение на

-= // понизит значение на
*= // умножит значение на
/= // разделит значение на
//примеры:
let myVar = 1;
myVar += 5;
console.log(myVar); // выдаст 6

myVar -= 5; // понизит на 5 и т.д.

// Как сохранить ковычки в выводимом тексте
const sampleStr = "Alan said, \"Peter is learning JavaScript\"."; // выдаст:
// Alan said, "Peter is learning JavaScript".
/* мы просто поставили обратный слеш перед ковычкой, 
которую хотели увидеть в тексте.*/

/* Еще о ковычках:
в JS одинарные и двойные ковычки ведут себя одинаково:*/
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
// можно использовать два вида ковычек что бы получить ковычки при выводе:
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
// однако вот тут это не получится:
const badStr = 'Finn responds, "Let's go!"';
// выдаст ошибку, символ ' в Let's JS посчитал как ковычку и законченную строку
// в этом случае опять используем обратный слеш:
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
// выдаст результат: Jake asks Finn, "Hey, let's go on an adventure?"

/* 
Escape-последовательности в строках:
\'	одинарная кавычка
\"	двойная кавычка
\\	обратная косая черта
\n	новая строка
\t	отуступ, табуляция
\r	возврат каретки (что за хрень хз пока)
\b	граница слова (тоже хз)
\f	подача формы (опять хз)

*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // результат будет:
FirstLine
	\SecondLine
ThirdLine

// объединение строк

/* с помощью оператора + можно объеденять строки */
const ourStr = "I come first. " + "I come second.";
// на выходе будет: I come first. I come second.

// c помощью += можно добавлять строку
let ourStr = "I come first. ";
ourStr += "I come second.";
// на выходе так же будет I come first. I come second.

// можно объеденять строки используя переменные
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
/* на выходе будет:
Hello, our name is freeCodeCamp, how are you? */

// так же можно состовлять строки используя перменные в которые входят эти строки
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// на выходе freeCodeCamp is awesome!

// ОПРЕДЕЛЯЕМ ДЛИННУ СТРОКИ
.length // С помощью 
console.log("Alan Peter".length); // на выходе будет 10
// или же длинну строки в переменной:

// НАЙТИ СИМВОЛ В СТРОКЕ с помощью []
const firstName = "Charles"; 
const firstLetter = firstName[0]; // индексация начинается с 0, поэтомму первый символ идет под 0
console.log(firstLetter) // выдаст значение "C"

//мы не можем поменять символ в строке:
let myStr = "Bob";
myStr[0] = "J"; // ошибка
// но можно поменять всю строку целиком
let myStr = "Bob";
myStr = "Job"; // если только не использовали const

// таким макаром можно найти любой символ в строке
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName будет "d"

// последний символ в строке можно найти с помощью .length - 1
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1]; // то есть длинна строки минус 1
lastLetter // будет иметь значение "a"

// таким же способом можно найти символы в обратной последовательности:
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3]; // т.е. третий символ с конца
thirdToLastLetter // будет иместь значение "s"


// МАССИВЫ, с помощью них можно хранить несколько данных в одной переменной:
const sandwich = ["peanut butter", "jelly", "bread"];

// мы можем поместить массивы внутрь других массивов:
const teams = [["Bulls", 23], ["White Sox", 45]]; // это называется многомерный массив

// получать доступ к элементам массивы можно с помощью индексов:
const array = [50, 60, 70];
console.log(array[0]); // значение будет 50 
const data = array[1]; // тут 60

// существую МНОГОМЕРНЫЕ массивы:
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const subarray = arr[3]; // тут это четвертая строчка (потому что индексация с 0). т.е. [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // четвертая строчка, первый элемент массива в этой строчке [10, 11, 12]
const element = arr[3][0][1]; /* четвертая строчка, первый элемент массива, 
и второй элемент внтутри него "11"*/
// пробелы между названиями массивов и квадратными скобками не допускаются

.push() // добавления данных в конец массива
const arr1 = [1, 2, 3];
arr1.push(4); // arr1 имеет значение [1, 2, 3, 4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // arr2 ["Stimpson", "J", "cat", ["happy", "joy"]]

.pop() // извлечения значения из конца массива
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // отобразит 6
console.log(threeArr); // отобразит [1, 4]

.shift() // удаляет первый элемент из массива
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray // будет иметь значение Stimpson
ourArray // ["J", ["cat"]]

.unshift() // добавляет элементы в начало массива
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // удаляет "Stimpson"
ourArray.unshift("Happy");
ourArray // будет иметь массив ["Happy", "J", "cat"]

// Функции - многоразовый код
function functionName() { // function - команда, functionName - имя функции { - начало блока функции
    console.log("Hello World"); // что должна сделать функция при вызове functionName
}
functionName(); /* теперь каждый раз когда в коде будет functionName
в консоле будет вызываться "Hello World" */

/*Параметры — это переменные, которые действуют как заполнители для значений, 
которые должны быть введены в функцию при ее вызове. Фактические значения, 
которые вводятся (или «передаются» ) в функцию при ее вызове, называются аргументами. */
function testFun(param1, param2) {
    console.log(param1, param2);
}
testFun("Hello", "World"); // вместе с вызовом функции мы передали два аргументы для этой функции
// после этой команды на консоле будет выведено Hello World

// Возврат значения из функции!!! c помощью return оператора
function plusThree(num) {
    return num + 3;
}
const answer = plusThree(5);
/* тут мы имеем функцию plusThree(num)
внутри функции оператор return. 
мы заводим перменную answer... она будет равна функции plusThree, 
внутри мы пишем какое нибудь значение, в данном случае 5
num принимает значение 5, дальше функция прибавляет 3 (num + 3)
а оператор return ВОЗВРАЩАЕТ полученное значение в answer
*/

// Global and Local
/* переменные объявленные вне блока фигурных скобок {}
будут глобальными (global), то есть доступными во всем коде
переменные которые объявленны ВНУТРИ блока {} будут локальными (local)
и будут доступны только внутри блока. */
let someOutBlock = "что то вне блока";
{   
    let someInBlock = "что то внутри блока";
}
console.log(someOutBlock) // выдаст "что то вне блока"
console.log(someInBlock) // выдаст ошибку
// возможны переменные с одинаковым именем и с глобал и с локал
// локальная переменнная будет иметь приоритет надо глобальной

// функция может и не включить оператор return
let sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
// значение sum изменится при вызове функции
// но, возвращаемое значение функции будет неопределено (undefined)

// мы можем присвоить переменной полученой от return при вызове функции:
function sum(a, b){
    return a+b;
}
ourSum = sum(5, 12); /* тут мы вызываем функцию sum 
и присваиваем a b значения 5 и 12. return возвращает полученую сумму
и присваевает ее переменной ourSum*/
console.log(ourSum); // выдаст 17

/* Логический тип данных (boolean) - истина (true) или лож (false)
логические данные можно использовать с оператором if */
function test (myCondition) { // вызов функции test
    if (myCondition) { // если условия true (тут true по умолчанию
      return "It was true"; // то запускается этот блок
    }
    return "It was false"; // в противном случае продолжается этот
}

// операторы равенства
== // оператор сравнивает значения, если они равны то возвращает true
// если не равны то false
function equalityTest(myVal) {
    if (myVal == 10) { // если myVal равно 10, 
      return "Equal"; // то запускается этот блок и возвращает "Equal"
    }
    return "Not Equal"; // если не равно 10 то этот лок и "Not Equal"
}
// JS сам переводит цифры в number если они в строках:
1   ==  1  // true
1   ==  2  // false
1   == '1' // true 
"3" ==  3  // true

=== // оператор строгого равенства, не переводит строки в number
3 ===  3  // true
3 === '3' // false

// что бы определить какой тип имеет перменная можно использовать typeof
typeof 3
typeof '3'
//(надо бы разобраться куда они выводят какой тип)

!= // оператор НЕравенства 
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

!== // оператор СТРОГОГО неравенства
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

> // оператор БОЛЬШЕ чем
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

>= // оператор БОЛЬШЕ или РАВНО
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

< // оператор МЕНЬШЕ чем
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

<= // оператор МЕНЬШЕ или РАВНО
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false


&&// логический оператор and (и)
// иногда нужно проверить больше одной вещи за раз,
// например:
5 < num < 10
// это можно проверить так:
if (num > 5) { // если num > 5, то проверяем дальше
    if (num < 10) { // если num меньше 10 то 
      return "Yes"; // выходит yes
    }
}
return "No";

// короче можно написать так:
if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

|| // оператор ИЛИ (or) 
// возвращает trueзначение, если один из операндов равен true
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";

else // оператор нужен что бы выполнить альтернативный блок кода
if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

// можно использовать несколько условий с помощью else
if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// оператор switch
function howManydays(month){ // запускается функция с номером месяца
    var days; // заводим переменную количество дней
    switch (month){ // оператор переключения
      case 4: case 6: case 9: case 11: // в случае month === 4 6 9 11
        days=30; // days равно 30
        break; // заканичвает переключения
      case 2:
        days=28;
        break;
      default: // если никакие case не выполнены, то идет этот вариант
        days=31;
    }
    return days; // возвращаем days
  }

// Возврат логических значений из функций
// допустим нам надо вернуть true или false, можно так:
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// однако операторы сравнения по умолчанию возвращают true или false:
function isEqual(a, b) {
  return a === b;
}

//Создание объектов JavaScript
// объекты почти как массивы
const cat = { 
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
// тут у нас объект кот, у которого есть свойства 
// свойства могут быть записаны как в ковычках так и без
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

/* два способа доступа к свойствам объекта: 
запись через точку ( .) 
и запись в квадратных скобках ( []), аналогичная массиву. */
//пример использования записи через точку (если заранее знаеть имя свойства):
const myObj = {
  prop1: "val1",
  prop2: "val2"
};
const prop1val = myObj.prop1; // будет "val1"
const prop2val = myObj.prop2; // будет "val2"

/* Если в имени свойства объекта, к которому вы пытаетесь получить доступ, 
есть пробел, вам нужно будет использовать обозначение в квадратных скобках. */
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
// так же если в имени свойства есть пробелы, то они ДОЛЖНЫ быть в ковычках

/* Еще одно использование квадратных скобок для объектов — доступ к свойству, 
которое хранится как значение переменной. 
Это может быть очень полезно для перебора свойств объекта или при доступе к таблице поиска. */
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog]; // тут в скобках уже переменная
console.log(myBreed); // тут будет "Doberman"

/* вы можете обновить его свойства в любое время так же, 
как и любую другую переменную. 
Для обновления можно использовать либо точку, либо скобки. */
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper" // изменит name на Happy Camper
// можно изменить так:
ourDog["name"] = "Happy Camper";

/* можете добавлять новые свойства к существующим объектам */
ourDog.bark = "bow-wow";
// или же
ourDog["bark"] = "bow-wow";
// добавит свойство bark

//Мы также можем удалить свойства из объектов с помощью delete:
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark; // удалит bark

/* Объекты можно рассматривать как хранилище ключей/значений, 
например словарь. Если у вас есть табличные данные, вы можете использовать объект 
для поиска значений, вместо switc или if/else. 
Это полезно, когда ваши входные данные ограничены определенным диапазоном. */
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};
const articleAuthor = article[author];
const articleLink = article[link];

const value = "title";
const valueLookup = article[value];

// Иногда полезно проверить, существует ли свойство данного объекта или нет.
// для этого используем .hasOwnProperty() оно возвращает true false
const myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true то есть свойство есть
myObj.hasOwnProperty("middle"); // false то есть свойства нет

// Гибкая структура данных
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
/* Это массив, который содержит один объект внутри. 
Объект содержит различные фрагменты метаданных об альбоме. 
Он также имеет вложенный formatsмассив. 
Если вы хотите добавить больше записей альбомов, 
вы можете сделать это, добавив записи в массив верхнего уровня. 
Объекты содержат данные в свойстве, имеющем формат ключ-значение. 
В приведенном выше примере "artist": "Daft Punk" это свойство имеет ключ artist и значение Daft Punk. */
// Короче говоря...
const myMusic = [ // muMusic содержит содержит два объекта
  {
    "artist": "Bon Jovi",
    "title": "Bounce",
    "release_year": 2002,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

// Доступ к подсвойствам объектов можно получить, соединив вместе точки или квадратные скобки.
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // тут будет строка "secrets"
// !! если есть ПРОБЕЛЫ используем квадратные скобки и строчку в ковычках, перед скобкой точку не ставим.
ourStorage.desk.drawer; // тут будет "stapler"

/* Подобно доступу к вложенным объектам, 
нотация скобок массива может быть связана для доступа к вложенным массивам. */
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // тут будет Fluffy
ourPets[1].names[0]; // тут будет Spot

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1]; // то есть первый объект в myPlants

/* Первый тип цикла, называется whil, он выполняется, пока заданное условие истинно, 
и останавливается, когда это условие перестает быть истинным.*/
const ourArray = [];
let i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
// while цикл выполнится 5 раз и добавит числа от 0 до 4 к ourArray

//цикл for
function sum1_100(){
  var sum=0,num=1
  while (num<=100){
    sum+=num;
    num++;
  }
  return sum;
}
// перед нами цикл while, его строчки можно сократить 
function sum1_100(){
  for (var sum=0,num=1;num<=100;num++){
    sum+=num;
  }
  return sum;
}
// в скобках части разделяются точкой с запятой.
// первая часть var sum=0, num=1; иницилизация то что идет до цикла
// вторая часть num<=100; пока условие истинно, цикл идет
// третья часть num++ будет выполняться после блока цикла.
// ну а    sum+=num; это то что выполняется в цикле


/*
Распространненной задачей JavaScript является перебор содержимого массива. 
Один из способов сделать это — использовать for цикл.
*/
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
//Помните, что индексация массивов начинается с нуля, что означает, 
// что последний индекс массива равен length - 1

/*
Если у вас есть многомерный массив, вы можете использовать ту же логику, 
что и предыдущая путевая точка, для прохода как по массиву, так и по любым подмассивам. 
Вот пример:
*/
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
// тут же задача: перемножить все числа подмассивов
function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr[i].length; j++){
      product*=arr[i][j];
  }
}
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/* 
Цикл do while
 */
const ourArray = []; 
let i = 5;

do { 
  ourArray.push(i);
  i++; // сначала выполняется код до цикла
} while (i < 5); // а ПОТОМ проверяется условие
// По сути, do...whileцикл гарантирует, что код внутри цикла будет выполнен хотя бы один раз. 

// Замена циклов с помощью рекурсии
function multiply(arr, n) { // в данном случае n это сколько раз будет проходить "цикл"
  if (n <= 0) { // если n меньше или равно 0, "цикл" заканчивается и выводиться результат
    return 1; // в данном случае возвращается единица, но можно сюда засунуть и результат функции
  } else { // в противном случае
    return multiply(arr, n - 1) * arr[n - 1];
  }
}