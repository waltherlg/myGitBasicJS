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

/*наконец то нормальная задача про гольфистов 
В игре в гольф у каждой лунки есть par, что означает 
среднее количество очков strokes, которое игрок в гольф должен сделать, 
чтобы загнать мяч в лунку и завершить игру. 
В зависимости от того, насколько выше или ниже parвы 
strokesнаходитесь, существует другое прозвище.

Вашей функции будут переданы parи strokesаргументы. 
Верните правильную строку в соответствии с этой таблицей, 
в которой штрихи перечислены в порядке приоритета; 
сверху (самый высокий) к низу (самый низкий):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let diff = par - strokes;
  if (strokes == 1) {
  return names[0];
  }
  else if (diff == 0) {
  return names[3];
  }
  else if (par > strokes) {
    if (diff == 1) {
      return names[2];
    }
    else if (diff >= 2) {
      return names[1];
  }
  }
  else if (par < strokes); {
    if (diff == -1) {
      return names[4];
    }
    else if (diff == -2) {
      return names[5];
    }
    else if (diff <= -3) {
      return names[6];
    }
   }
  // Only change code above this line
}

golfScore(5, 4);