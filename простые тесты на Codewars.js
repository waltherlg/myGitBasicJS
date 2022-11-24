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

// после трех часов неудачной попытке решить задачу, сдался... и решил совсем мелкую:
// убрать "egg" из строк: из "Beggegeggineggneggeregg" должно получится "Beginner"
function unscrambleEggs(word){
  return word.replace(/egg/g,""); // 
}
// команда replace заменяет то что под слешами /egg/ "g" значит что проверка будет по всей строке, 
// в ковычках идет на что мы заменяем egg, в данном случае ни на что.

//Нам дается кусок алфавита, нужно найти в нем пропущенную букву
function findMissingLetter(array){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let firstSimInArr = array[0]; // первый символ на вводе
  let otpravnoyIndexSimvol = alphabet.indexOf(firstSimInArr); // индекс отправного символа в алфавите
  let a = 0 // начало сравнения вводного куска
  let b = otpravnoyIndexSimvol // отправной символ в алфавите
  while (array[a] == alphabet[b]){
      a++;
      b++;
  }
  console.log(alphabet[b])

return alphabet[b];
}


/* Бросается мяч с высоты h. высота отскока = bounce. Нужно посчитать сколько раз мячь пролетит window
Плавающий параметр "h" в метрах должен быть больше 0
Плавающий параметр "bounce" должен быть больше 0 и меньше 1
Плавающий параметр "окно" должен быть меньше h.
Если все три условия выше выполнены, вернуть положительное целое число, иначе вернуть -1.
*/
function bouncingBall(h,  bounce,  window) {
  let count = 0; // подсчет увиденного = 0
  if (h>0 && 0<bounce && bounce<1 && window < h){
      for (count = count; h>window; h *= bounce){ // подсчет равно подсчет ¯\_(ツ)_/¯; до тех пор пока высота больше окна. Высота изменяется на высоту отскока
          count++; // сначала мячик видят при падении вниз
          if ((h * bounce) > window){ // если высота отскока больше высоты окна
              count++; // мячик видят еще раз
          }
          else{ // если меньше
              break; // цикл заканчивается
          }
          
  }
  console.log(count)
  return count;
  }
  else{
      console.log(-1)
      return -1;
  } 
}


/* Простенькая задача на сортировку цифр 
Завершите решение, чтобы оно отсортировало переданный массив чисел. 
Если функция передает пустой массив или значение null/nil, 
она должна вернуть пустой массив.
Например:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
function solution(nums){
  if (nums == null){
      return [];
  }
  else if (nums == []){
      return [];
  }
  else{
      return nums.sort( (a, b) => a - b ); // метод сортировки из вчерашней нерешенной задачи
  }
}


// являются ли строчки анаграммой
var isAnagram = function(test, original) {
  let testLower = test.toLowerCase();
  let originalLower = original.toLowerCase();
  let sortedTest = testLower.split('').sort().join('');
  let sortedOriginal = originalLower.split('').sort().join('');
  if (sortedTest == sortedOriginal){
    return true;
  }
  else {
    return false;
  }
}

/*
Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) 
заканчивается вторым аргументом (тоже строкой).
Примеры:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending){
  let endingLen = ending.length;
  let startEnding = -endingLen;
  let endingStr
  for (endingStr = ''; startEnding < 0; startEnding++){
      endingStr = endingStr + str[str.length + startEnding];
      }
  if (endingStr == ending) {
      return true;
  }
  else{
      return false;
  }
  }

/*
адача
Учитывая целое число, определите, является ли оно квадратным числом :
В математике квадратное число или идеальный квадрат — это целое число, 
являющееся квадратом целого числа; другими словами, 
это произведение некоторого целого числа на самого себя.
*/
var isSquare = function(n){
  if (n < 0) {
      return false;
  }
  else{
      let sqv = Math.sqrt(n).toFixed(0); // извлекаем корень из вводимого числа и округляем до целого
      if (sqv*sqv == n){ // Умножаем извлеченное число на само себя, если оно равно вводимому, то true
          return true;
      }
      else{
          return false; 
      }
       
  }   
}

// вывести строку задом наперед
function solution(str){
  let strLength = str.length; // определяем длинну
  let endStr = [] // заводим массив куда будем скидывать буквы
  for (let start = strLength-1; start>=0; start--){ // стартуем с последней буквы и до тех пор пока будет больше или равно 0
    endStr.push(str[start]) // запихиваем буквы массив
  }
  endStr = endStr.join(''); // переделываем массив в строку
  return endStr;
}

// определить длинну самого короткого слова в строке:
function findShort(s){
  let arr = s.split(" ") // переводим строку в массив
  let sorted = arr.sort((a, b) => b.length - a.length) // сортируем элементы массива по длинне
  return(sorted[sorted.length-1].length) // выводим длинну последнего массива
}

// вычеслить наименьшее и наибольшее число в массиве
var min = function(list){
  list.sort( (a, b) => a - b );
  console.log(list[0])
  return list[0];
}
var max = function(list){
  list.sort( (a, b) => b - a );
  console.log(list[0])
  return list[0];
}
min([-52, 56, 30, 29, -54, 0, -110])
max([-52, 56, 30, 29, -54, 0, -110])

/*
В городке население p0 = 1000 на начало года. 
Население регулярно увеличивается на percent = 2 в год, и, кроме того , 
каждый год в город приезжают  aug = 50 новых жителей. Сколько лет нужно городу, 
чтобы его население было больше или равно количеству p = 1200жителей?
*/
function nbYear(p0, percent, aug, p) {
  for (year = 0; p0<p; year++){
      let perc = p0*(percent*0.01);
      p0 = Math.floor(p0+perc+aug); // загвоздка была в этой строчке, нужно каждый раз округлять население в меньшую сторону.
  }
  return year;
}
nbYear(1000, 2, 50, 1214);