// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  var rangeArray = [];
  var sortedArr = arr.sort();
  var lowEnd = sortedArr[0];
  var highEnd = sortedArr[sortedArr.length - 1]

  while(lowEnd <= highEnd) {
    rangeArray.push(lowEnd++)
  }
  console.log(rangeArray);

  for(var i = 0; i < rangeArray.length; i ++) {

  }


}


smallestCommons([1,5]);
