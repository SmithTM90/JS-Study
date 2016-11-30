function sumAll(arr) {
  var arrLength = Math.max(arr[0], arr[1]);
  var arrMin = Math.min(arr[0], arr[1]);
  
  var newArr = [];
  for(var i=arrMin;i < arrLength + 1;i++) {
    newArr.push(i);
    var total = newArr.reduce(function(a,b) {
      return a + b;
    })
  }
  
  return total;
}

sumAll([1, 4]);