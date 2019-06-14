function deleteNth(arr,n){
    var obj = {}
    return arr.filter(number => {
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= n
    });
  }


  
  console.log(deleteNth([20,37,20,21], 1));