function getCount(str){
   let count = 0;
   for (let i = 0; i < str.length; i++) {
       if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count += 1;
       }
   }
   return count;
}
console.log(getCount("Return the number (count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this Kata. The input string will only consist of lower case letters and/or spaces."));



// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }
    
//     return vowelsCount;
//   }


//   function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
//   }


//   function getCount(str) {
//     var vowelsCount = 0;
//     vowelsCount = str.match(/[aeiou]/gi);
//     return vowelsCount ? vowelsCount.length:0;
//   }


//   function getCount(str) {
//     return (str.match(/[aeiou]/g) || []).length
//   }

//   function getCount(str) {
//     let vowels = ['a','e','i','o','u'];
//     return str.split('').filter(letter => {
//       return vowels.includes(letter)? true : false;
//     }).length;
//   }

//   function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function(x){
//       if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
//         vowelsCount += 1;
//       }
//     });  
//     return vowelsCount;
//   }