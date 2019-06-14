function count (string) {  
     let result = {};
     let split = string.split('');

     for (let i = 0; i < split.length; i++) {
        if(result.hasOwnProperty(split[i])){
            result[split[i]] += 1;
        }else{
          result[string[i]] = 1;
        }

       
     }
     return result;
    //  string.split('').forEach(key => result.hasOwnProperty(key) ? result[key] += 1 : result[key] = 1);
    //  return !string ? {} : result;
  
  }

console.log(count("aba")); 
console.log(count("")); 



// function count (string) {  
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }

// function count (string) {  
//   var obj = {};
//   string = string.split('').forEach(function(x){
//     obj[x] = obj[x] ? obj[x] + 1 : 1;
//   });
//   return obj;
// }

// function count (string) {  
//   return string.split("").reduce(function(obj, elem) {
//     if (elem in obj)
//       obj[elem]++;
//     else
//       obj[elem] = 1;
//     return obj;
//   }, {});
// }

// function count (string) {  
//   string = string.split("");
//   var chars = {};
//   for(var i = 0; i < string.length; i++) {
//     if(chars[string[i]] == undefined) chars[string[i]] = 0;
//     chars[string[i]]++;
//   }
//   return chars;
// }