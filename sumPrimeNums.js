function sumPrimes(num) {
  var myArr = [];
  
  if(num % 2 !== 0) {
    myArr.push(num);
  }

  function isPrime(value) {
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  
  for(var i=1;i < num;i++) {
    if(isPrime(i) === true) {
      myArr.push(i);
    }
  }
  
  return myArr.reduce(function(a,b) {
    return a + b;
  })
}

sumPrimes(977);