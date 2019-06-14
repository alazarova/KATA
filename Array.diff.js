function array_diff(a, b){  

    return a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));

    // var newArr = [];
    // for (let i = 0; i < a.length; i++) {
    //   if (b.indexOf(a[i]) === -1) {
    //     newArr.push(a[i]);
    //   }
    // }
    // return newArr;
}

console.log(array_diff([1,2],[1]));
console.log(array_diff([1,2,2,2,3],[2]));


// function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
//   }

//   function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }

//   function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
//   }
