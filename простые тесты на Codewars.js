//простые тесты на Codewars
// тест 1
function helloWorld() {
    let str = "Hello World!";
    console.log(str);
}


// тест2
let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a =  v4, //set number value to a
      b =  v2; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

//задача 3
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

//задача 4
function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0];
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1];
  }
  function pushElement(arr){
    var el = 1;
    //push el to arr
    arr.push(el);
    return arr // я в душе не знаю почему .push нельзя сюда прифигачить.
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr // так же как и фигня выше, надеюсь когда нибудь пойму
  }

  // Задача 5...
  /*Дайте вам функцию animal, примите 1 параметр: objвот так:
{name:"dog",legs:4,color:"white"}
и вернуть такую ​​строку:
"This white dog has 4 legs."*/
function animal(obj){ 
  obj = ("This " + obj.color + " " + obj.name + " " + "has " + obj.legs + " legs");
  return obj // т.е. СНАЧАЛА мы формируем obj а потом его возвращаем
}

//Задача 6
/*Кодирование в функции trueOrFalse, функция принимает 1 параметр: val
попробуйте использовать условный оператор if...else, 
если val значение равно false (val==false или оно может быть преобразовано в false), 
должно вернуть строку "false", если нет, вернуть строку "true".*/
function trueOrFalse(val){
  if (val) {
    return "true"; 
  }             
  return "false";
}

//задача 6
/* цена ходтогов зависит от количетсва
Если количетсва меньше 5 - 100 центов, от 5 до 10 - 95 центов, свыще 10 - 90 центов.
Нужно просчитать выручку при продаже разного количества хотдогов*/
function saleHotdogs(n){
  var price
  if (n<5) price = 100
  else if (n>=5, n<10) price =  95
  else price = 90
  return n*price
}

//задача на месяцы
//сколько дней в месяце?
{
  function howManydays(month){
      var days;
      switch (month){
        case 1:
          days=31;
          break;
        case 2:
          days=28;
          break;
        case 3:
          days=31;
          break;
        case 4:
          days=30;
          break;
        case 5:
          days=31;
          break;
        case 6:
          days=30;
          break;
        case 7:
          days=31;
          break;
        case 8:
          days=31;
          break;
        case 9:
          days=30;
          break;
        case 10:
          days=31;
          break;
        case 11:
          days=30;
          break;
        case 12:
          days=31;
          break;
      }
      return days;
    }
  }
  // сколько дней в месяце если подумать подольше?
    function howManydays(month){
      var days;
      switch (month){
        case 4: case 6: case 9: case 11:
          days=30;
          break;
        case 2:
          days=28;
          break;
        default:
          days=31;
      }
      return days;
    }


/*функция padIt, которая принимает 2 параметра:
str: строка, представляющая строку для заполнения. Мы дополним его "*"символами с левой и с правой стороны.
n: число, указывающее, сколько раз дополнять строку. */
function padIt(str,n){
  let schet = 0;
  let mass = "";
  mass+=str;
  while (schet != n) {
    if (schet % 2 != 0){
      mass+="*";
    }
    else {
      mass = ("*" + mass);
    }
    schet++;
  }
  return mass;
}
padIt("str",5)


/* Не совсем простая задача 
Завершите функцию, на входе чсло n, такое что n >= 10и n < 10000, затем:
Сложите все цифры числа n.
Вычтите сумму из n, и это ваш новый n.
Если новый nнаходится в списке ниже, 
верните связанный с ним фрукт, в противном случае вернитесь к задаче 1.
Пример
n = 325
сумма = 3+2+5= 10
n = 325-10= 315(нет в списке)
сумма = 3+1+5= 9
n = 315-9= 306(нет в списке)
сумма = 3+0+6= 9
n = 306-9= 297(нет в списке)
.
.
.
... пока не найдете первый n в списке ниже.
*/

function SubtractSum(n){
  let summa = 0;
  let numbIsNumb = 0;
  let probe
  for ( probe = 1000; probe>100; probe = n - summa, n = probe, summa = 0) {
    let numbInStr = String(n);
    let kolvoCifr = numbInStr.length;
    for (var sum=0; sum!=kolvoCifr ;sum++){
      numbIsNumb = numbInStr[sum];
      numbIsNumb = Number(numbIsNumb);
      summa+=numbIsNumb
    }  
  }
  var fruit;
  switch(probe){
      case 1: case 3: case 24: case 26: case 47: case 49: case 68: case 70: case 91: case 93:
          fruit="kiwi";
          break;
      case 2: case 21: case 23: case 42: case 44: case 65: case 67: case 69: case 88:
          fruit="pear";
          break;
      case 4: case 6: case 25: case 29: case 48: case 50: case 71: case 73: case 92: case 94: case 96:
          fruit="banana";
          break;
      case 5: case 7: case 28: case 30: case 32: case 51: case 53: case 74: case 76: case 95: case 97:
          fruit="melon";
          break;
      case 8: case 10: case 12: case 31: case 33: case 52: case 56: case 75: case 77: case 79: case 98: case 100:
          fruit="pineapple";
          break;
      case 9: case 18: case 27: case 36: case 45: case 54: case 63: case 72: case 81: case 90: case 99:
          fruit="apple";
          break;
      case 11: case 13: case 34: case 55: case 57: case 59: case 78: case 80:
          fruit="cucumber";
          break;
      case 14: case 16: case 35: case 37: case 39: case 58: case 60: case 83:
          fruit="orange";
          break;
      case 15: case 17: case 19: case 38: case 40: case 61: case 82: case 84: case 86:
          fruit="grape";
          break;
      case 20: case 22: case 41: case 43: case 62: case 64: case 66: case 85: case 87: case 89:
          fruit="cherry";
          break;    
  }  
  return fruit;  
}
// хрень в том, что при любом числе n значение fruit будет apple.
// так что в решениях много простых кодов типа:
function SubtractSum(n){
  return "apple"
}


/* Задачка с массивами 
Реализуйте функцию, которая принимает массив, содержащий имена людей, 
которым понравился элемент. Он должен возвращать отображаемый текст, 
как показано в примерах:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
function likes(names) {
  let a = names.length;
  switch (a){
      case 0:
          answer = "no one likes this";
          break;
      case 1:
          answer = (names[0] + " likes this" );
          break;
      case 2:
          answer = (names[0] + " and " + names[1] + " like this" );
          break;
      case 3:
          answer = (names[0] + ", " + names[1] + " and " + names[2] + " like this" );
          break;
      default:
          let howManyOthers = a - 2;
          let others = String(howManyOthers);
          answer = (names[0] + ", " + names[1] + " and " + others + " others like this" );
  }    
  return answer;
}

/* Дается массив чисел, нужно вернуть массив с противоположными знаками. 
Каждое положительное число становится отрицательным, 
а отрицательное становится положительным.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == [] 
*/
function invert(array) {
  let a = array.length;
  let newArray = [];
  for (let sum = 0; sum < a; sum++){
      let number = (array[sum]);
      if ( number > 0){
          number-=number*2;
          newArray.push(number);
      } 
      else if (number < 0){
          number-=number*2
          newArray.push(number);
      }
      else if (number == 0){
          number=-0;
          newArray.push(number);
      }
  }
      return newArray;
}
// среди решений более простой вариант
function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]); // не знал что так можно
  }
   return newArr;
}

/* Задачка
Ваша задача вернуть true, если дробная часть 
(округленная до 1 цифры) результата ( a/ b) 
существует, больше 0и кратна n. 
В противном случае возврат false. 
Все аргументы являются положительными цифровыми числами.
Округление работает аналогично методу toFixed(). 
(если более... 5 округлений вверх)
Найдите примеры ниже:
isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
isMultiple(666, 665, 2) -> false // 1.0 -> return false */
function isMultiple(a, b, n) {
  let firstAct = a/b;
  firstAct = firstAct.toFixed(1);
  console.log(firstAct)
  let secondAct = Math.ceil(firstAct);
  console.log(secondAct)
  let thirdAct = ((firstAct - (secondAct-1))*10)
  thirdAct = thirdAct.toFixed(0);
  console.log(thirdAct)
  if (thirdAct == 10){
      return false;
  }
  if (thirdAct%n == 0){
      return true;
  }
  else {
      return false;
  }
}
