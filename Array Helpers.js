
var numbers = [1, 2, 3, 4, 5];
var num = [];
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
console.log(numbers.square());

Array.prototype.cube = function () { return this.map(function(n) { return n*n*n; }); }
console.log(numbers.cube());

Array.prototype.sum = function () { return this.reduce((a, b) => a + b, 0) }
console.log(numbers.sum());

Array.prototype.average = function () { return this.sum() / this.length; }
console.log(numbers.average());

Array.prototype.even = function () { return this.filter(function(a) { return a % 2 === 0; }); }
console.log(numbers.even());

Array.prototype.odd = function () { return this.filter(function(a) { return a % 2 !== 0; }); }
console.log(numbers.odd());


// Object.assign(Array.prototype, {
//     square() {return this.map(n => n * n);},
//     cube() {return this.map(n => Math.pow(n, 3));},
//     sum() {return this.reduce((p,n) => p + n, 0);},
//     average() {return this.reduce((p,n) => p + n, 0) / this.length;},
//     even() {return this.filter(n => !(n % 2));},
//     odd() {return this.filter(n => n % 2);}
// });


// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

// Array.prototype.square = function() {
//     var squared = [];
//     for (var i = 0; i < this.length; i++) {
//       squared[i] = Math.pow(this[i], 2);
//     }
//     return squared;
//   }
  
//   Array.prototype.cube = function() {
//     var cubed = [];
//     for (var i = 0; i < this.length; i++) {
//       cubed[i] = Math.pow(this[i], 3);
//     }
//     return cubed;
//   }
  
//   Array.prototype.sum = function() {
//     var sum = 0;
//     for (var i = 0; i < this.length; i++) {
//       sum += this[i];
//     }
//     return sum;
//   }
  
//   Array.prototype.average = function() {
//     if (this.length == 0) return NaN;
//     return this.sum() / this.length;
//   }
  
//   Array.prototype.even = function() {
//     var evens = [];
//     for (var i = 0; i < this.length; i++) {
//       if (this[i] % 2 == 0) evens.push(this[i]);
//     }
//     return evens;
//   }
  
//   Array.prototype.odd = function() {
//     var odds = [];
//     for (var i = 0; i < this.length; i++) {
//       if (this[i] % 2 == 1) odds.push(this[i]);
//     }
//     return odds;
//   }