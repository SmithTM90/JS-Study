function slasher(arr, howMany) {
  
  var slash = arr.slice(howMany, arr.length)
  
  return slash;
}

slasher([1, 2, 3], 2);