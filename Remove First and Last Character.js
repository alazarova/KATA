function removeChar(str){
    return str.slice(1, -1);

}
console.log(removeChar('Your goal is to create a function that removes the first and last characters of a string.'));
console.log(removeChar("You're given one parameter, the original string. You don't have to worry with strings with less than two characters."));


// function removeChar(str){
//     return str.substring(1, str.length-1);
//    };


//    const removeChar = (str) => str.replace(/^.|.$/g, '');


//    function removeChar(str){
//     //You got this!
//      str1 = str.split('');
//      str1.shift();
//      str1.pop();
//      return str1.join('');
       
//    };