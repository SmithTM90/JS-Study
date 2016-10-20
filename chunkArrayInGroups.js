function chunkArrayInGroups (arr, size) {

  var newArr = [];
  var count = 0
  
  while(count<arr.length) {
    newArr.push(arr.slice(count, count+size))
    count = count+size
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
