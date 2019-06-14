function iqTest(numbers) {
    let arrNum = numbers.split(' ');
    let oddArr = [];
    let evenArr = [];

    // console.log(arrNum);
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            evenArr.push(i+1);
        } else {
            oddArr.push(i+1);
        }
        if (i > 1 && oddArr.length > evenArr.length && evenArr.length > 0) {return evenArr[0]}
        if (i > 1 && evenArr.length > oddArr.length && oddArr.length > 0) {return oddArr[0]}
      
      }
}
console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));