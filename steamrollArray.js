function steamrollArray(arr) {
  // I'm a steamroller, baby

  var notNested = [];

  for(var i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) {
      notNested.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      notNested.push(arr[i][0]);
    }

    if(!Array.isArray(notNested[i])) {
      notNested[i] = notNested[i];
    } else if (Array.isArray(notNested[i])) {
      notNested[i] = notNested[i][0];
    }
  }

  return notNested;
}

steamrollArray([[["a"]], [["b"]]]);
// steamrollArray([1, [2], [3, [[4]]]]);
