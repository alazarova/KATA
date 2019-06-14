function enough(cap, on, wait){
    if(on + wait > cap){
        return on + wait - cap;
    }else{
        return 0;
    }
}
console.log(enough(100, 60, 50));
console.log(enough(10, 5, 5));

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
//   }


// function enough(cap, on, wait) {
//     return (on+wait > cap) ? on+wait-cap : 0;
//   }

//   function enough(cap, on, wait) {
//     console.log(cap, on, wait)
//     return (cap-on) >= wait ? 0 : wait-(cap-on)
//     }

//     function enough(cap, on, wait) {
//         return Math.max(on + wait - cap, 0);
//       }