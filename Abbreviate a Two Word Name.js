function abbrevName(name){

    return name.split(' ').map(pos => pos.substr(0, 1).toUpperCase()).join('.');

}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feeney"));


// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

//   function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()



// function abbrevName(name){

//     return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();

// }

// const abbrevName = (name) => {
//     return name.split(" ").map(name => name[0].toUpperCase()).join(".");
//   };


//   function abbrevName(name){
//     return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
//   }