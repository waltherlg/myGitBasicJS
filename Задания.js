/*Используйте .pop()функцию, чтобы удалить последний элемент myArray
и присвоить выскочившее значение новой переменной, removedFromMyArray.*/
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

/*Используйте .shift()функцию, чтобы удалить первый элемент из myArray
и присвоить «смещенное значение» новой переменной, removedFromMyArray.*/
const myArray2 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray2.shift();
console.log(removedFromMyArray2);

//Добавьте ["Paul", 35]в начало myArrayпеременной, используя unshift().
const myArray3 = [["John", 23], ["dog", 3]];
myArray3.shift();
myArray3.unshift(["Paul", 35]);
console.log(myArray3);

/*Создайте список покупок в переменной myList. 
Список должен представлять собой многомерный массив, содержащий несколько подмассивов.*/
const myList = [["milk", 2], ["bread", 1], ["tomato", 3], ["puding", 2], ["donut", 6]];
console.log(myList);

/*Создайте вызываемую функцию, 
reusableFunctionкоторая выводит строку Hi Worldна консоль разработчика.*/
function reusableFunction() {
    console.log("Hi World");
  }
reusableFunction();