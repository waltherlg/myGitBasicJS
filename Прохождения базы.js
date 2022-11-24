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

// интересная задача про блекджек
/* Подсчет изменений	  Карты
          +1	          2, 3, 4, 5, 6
          0	            7, 8, 9
          -1	          10, 'J', 'Q', 'К', 'А' 
Нужно создать функцию подсчета карт, в зависимости от карт 
будет вестись счет + или - 1 или без изменений,
в конце ввода карт нужно вывести 
счет и Bet если счет положительный или Hold если счет отрицательный*/

let count = 0;
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2: case 3: case 4: case 5: case 6:
      count++; // тут повышаем счетчик
      break;
    case 10: case 'J': case 'Q': case 'K': case 'A':
      count--; // тут понижаем счетчик
      break;
    default: 
      break; // если выпадает 7, 8, 9, то нифига не делаем
  }
  let HoldOrBet; // заводим переменную холд или бет
  if (count > 0) { // если счет больше нуля, переменная будет бет
    HoldOrBet = "Bet";
  }
  else { // в противном случае холд
    HoldOrBet = "Hold";
  }

  return (count + " " + HoldOrBet); // возвращаем счетчик, пробел и ХолдИлиБет
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

//Преобразуйте оператор switch в объект с именем lookup. 
//Используйте его, чтобы найти valи присвоить связанную строку resultпеременной.
// Setup
function phoneticLookup(val) {
  let result = "";
  // Only change code below this line
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    }
    result = lookup[val]; // тут была запара - нужно использовать [] если есть ковычки
  // Only change code above this line
  return result;
}

// Еще одна задачка
/*Измените функцию checkObj, чтобы проверить, содержит ли объект, 
переданный функции ( obj), определенное свойство ( checkProp). 
Если свойство найдено, верните значение этого свойства. Если нет, верните "Not Found".*/
function checkObj(obj, checkProp) {
  // Only change code below this line
if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]; // снова загвоздка в квадратных скобках
   }
else {
    return "Not Found";
}
  // Only change code above this line
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")

