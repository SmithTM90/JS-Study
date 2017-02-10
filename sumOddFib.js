function sumFibs(num) {

  var a = 1;
  var b = 0;
  var temp;
  var arr = [1];
  var oddArr = [];

  if(num === 1) {
    return 1;
  }

  while (a < num) {
    temp = a;
    a = a + b;
    b = temp;
    arr.push(a);
  }

  for(var i=0;i<arr.length;i++) {

    if(arr[i] % 2 !== 0) {
      if(arr[i] < num) {
        oddArr.push(arr[i]);
      }
      var oddSum = oddArr.reduce(function(a,b) {
        return a + b;
      });
    }
  }

  return oddSum;

}
