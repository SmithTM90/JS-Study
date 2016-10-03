function largestOfFour(arr) {
  var results = [];
  for (var n in arr) {
      var largestNumber = 0;
      for (var sb in arr[n]) {
          if (arr[n][sb] > largestNumber) {
              largestNumber = arr[n][sb];
          }
      }
    results[n] = largestNumber;
}
  return results;
}