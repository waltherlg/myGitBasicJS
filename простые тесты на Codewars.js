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