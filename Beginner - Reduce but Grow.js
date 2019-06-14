function grow(x) {
    return x.reduce((a, b) => a * b);
}
console.log(grow(
    [1, 2, 3, 4]
));


//#1
// const grow = x => x.reduce((a, b) => a * b);

//#2
// const grow = (nums) => nums.reduce((product, num) => product * num, 1);

//#3
// const grow = x => eval(x.join("*"));

//#4
// function grow(x) {

//     var sum = x.reduce(function (a, b) {
//         return a * b;
//     });

//     return sum
// }

//#5
// function grow(x){
//     return x.reduce((a, b)=> a * b,1);
//   }

//#6
// const grow = x => {
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i];
//     }
//     return res;
//   };