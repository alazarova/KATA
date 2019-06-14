function summation(num){
    return num * (num + 1) / 2;

}
console.log(summation(2));
console.log(summation(8));


// var summation = function (num) {
//     let result = 0;
//     for (var i = 1; i <= num; i++) {
//       result += i;
//     }
    
//     return result;
//   }



// var summation = function (num) {
//     return (num) ? num + summation(num - 1) : num;
// }