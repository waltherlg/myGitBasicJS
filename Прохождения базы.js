/*Создайте вызываемую функцию functionWithArgs, 
которая принимает два аргумента и выводит их сумму в консоль разработчика.
Вызовите функцию с двумя числами в качестве аргументов.*/
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1,2)

/*Создайте функцию timesFive, 
которая принимает один аргумент, 
умножает его на 5и возвращает новое значение.*/
function timesFive(num) {
  return num*5
}

// понимание глобал и локал
let someOutBlock = "что то вне блока";
console.log(someOutBlock);
{
  let someInBlock = "что то в блоке";
  console.log(someInBlock);
}
console.log(someOutBlock);
//console.log(someInBlock); // ошибка

/*Можно иметь как локальные , 
так и глобальные переменные с одинаковыми именами. 
При этом локальная переменная имеет приоритет над глобальной.*/
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  console.log(outerWear);
  }
myOutfit();
console.log(outerWear);

/*Вызовите processArgфункцию с аргументом 7и присвойте 
возвращаемое значение переменной processed.*/
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)

// чуть не сломал мозг пытаясь понять на англицком чего от меня хотят :(
/*Напишите функцию, nextInLine 
которая принимает массив ( arr) и число ( item) в качестве аргументов.
Добавьте число в конец массива, затем удалите первый элемент массива.
Затем nextInLineфункция должна вернуть элемент, который был удален.*/
function probe (arr, item) {
  arr.push(item);
  let udElement = arr[0];
  arr.shift();
  return udElement
}
probe([5,6,7,8,9], 1)

//if true
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return ("Yes, that was true");
  } 
  return ("No, that was false");
}