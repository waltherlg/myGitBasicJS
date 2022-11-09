//Manipulate Arrays With pop() Управление массивами с помощью pop()
const myArray = [["John", 23], ["cat", 2]];
/*Используйте .pop()функцию, чтобы удалить последний элемент myArray
и присвоить выскочившее значение новой переменной, removedFromMyArray.*/
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray)

const myArray2 = [["John", 23], ["dog", 3]];
/*Используйте .shift()функцию, чтобы удалить первый элемент из myArray
и присвоить «смещенное значение» новой переменной, removedFromMyArray.*/
const removedFromMyArray2 = myArray2.shift();