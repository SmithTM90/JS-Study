function myReplace(str, before, after) {
  
  if(before[0] === before[0].toUpperCase()) {
    console.log(before);
    var upperAfter = after.charAt(0).toUpperCase() + after.slice(1);
    console.log(upperAfter);
    str = str.replace(before, upperAfter);
  } else {
    str = str.replace(before,after);
  }
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");