function sortArray(array) {
    let oddNumbers = [];
    let evenNumbers = [];
    let arrLength = array.length;
    let finishArr = [];
    console.log(arrLength);
    for (let step = 0; step < arrLength; step++)
        if (array[step] % 2 == 0){
            evenNumbers.push(array[step]);
        }
        else if (array[step] % 2 != 0){
            oddNumbers.push(array[step]);
        } 
    console.log(oddNumbers)
    console.log(evenNumbers)
    oddNumbers.sort( (a, b) => a - b ); 
    console.log(oddNumbers)
    let lenOddNumbers = oddNumbers.length;
    let lenEvenNumbers = evenNumbers.length;
    let num = 0;
    let LON = 0;
    let LEN = 0;
    while (true) {
        if (LON < lenOddNumbers){
            finishArr.push(oddNumbers[LON]);
            LON++;
        }
        else{
            break;
        }
        if (LEN < lenEvenNumbers){
            finishArr.push(lenEvenNumbers[LEN]);
            LEN++;
        }
        else{
            break;
        }    
    console.log(finishArr)   
  }
}
  sortArray([5, 8, 6, 3, 4])