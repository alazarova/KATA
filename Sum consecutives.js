    function sumConsecutives(s){
        let newNumbers = [];
        let result = 0;
        for (let i = 0; i < s.length; i++) {
            if(s[i] === s[i+1]){
                result += s[i];
            }else if(s[i] !== s[i+1]){
             newNumbers.push(result + s[i]); 
                result = 0;
            }            
        }
        return newNumbers;
}
    console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));



    // function sumConsecutives(s) {
    //     return s.reduce(function(prev, curr, i, arr) {
    //       if(curr != arr[i - 1]) prev.push(curr);
    //       else prev[prev.length - 1] += curr;
    //       return prev;
    //     }, []);
    //   }


    //   function sumConsecutives(list) {
    //     for (var a = [], i = 0, count; i < list.length; i += count) {
    //       for (count = 1; i + count < list.length && list[i + count] == list[i]; count++);
    //       a.push(list[i] * count);
    //     }
    //     return a;
    //   }