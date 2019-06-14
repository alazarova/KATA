function squareSum(numbers){
    return numbers.reduce((a, b) => ((b*b) + a));
}
console.log(squareSum([1, 2, 2]));



// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }



//   function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
//   }