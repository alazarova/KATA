function parse(data){
  let splitWord =  data.split('');
  let result = 0;
  let array = [];
  for(let i = 0; i < splitWord.length; i++){
    if(splitWord[i] == 'i'){
         result++;
    }
    else if(splitWord[i] == 'd'){
        result--;
     }
     else if(splitWord[i] == 's'){
        result = result * result ;
     }
    else if(splitWord[i] == 'o'){
         array.push(result);
     }
  }
  return array;
}
console.log(parse("iiisdoso"));


// function parse(data) {
//     let res = [];
  
//     data.split('').reduce((cur, s) => {
//       if (s === 'i') cur++;
//       if (s === 'd') cur--;
//       if (s === 's') cur = Math.pow(cur, 2);
//       if (s === 'o') res.push(cur);
      
//       return cur;
//     }, 0);
    
//     return res;
//   }


//   const parse = data => {
//     const Commands = {
//         INCREMENT:  'i',
//         DECREMENT:  'd',
//         SQUARE:     's',
//         OUTPUT:     'o'
//     }
  
//     var outputs = [],
//         value = 0;
    
//     data.split('').forEach(command => {
//       switch(command) {
//         case Commands.INCREMENT:  value++;                   break;
//         case Commands.DECREMENT:  value--;                   break;
//         case Commands.SQUARE:     value = Math.pow(value, 2);break;
//         case Commands.OUTPUT:     outputs.push(value);       break;
//       }
//     });
    
//     return outputs;
//   }


//   function parse( data ) {  
//     var v = 0, ret = []
//     for (var c of data) {
//       switch (c) {
//         case 'i' : v++;         break;
//         case 'd' : v--;         break;
//         case 's' : v=v*v;       break;
//         case 'o' : ret.push(v); break;
//       }
//     }
//     return ret;
//   }