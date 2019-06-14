function solution(string) {
    let pattern = /([A-Z]+[a-z]+)/g;
    let arrOfWord = string.split(pattern).filter((x) => x !== "");
    return arrOfWord.join(' ');

}
console.log(solution('camelCasingParrPlodKadSl'));


// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }

//   function solution(string) {
//     return string.split(/(?=[A-Z])/).join(' ');
//   }