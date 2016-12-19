// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  
  var strArr = str.split('');
  var pairArr = [];
  console.log(strArr);
  
  for(var i=0;i<strArr.length;i++) {
    
    var tempArr = [];
    
    if(strArr[i] === 'G') {
      tempArr.push(strArr[i], 'C');
    } else if (strArr[i] === 'C') {
      tempArr.push(strArr[i], 'G');
    } else if (strArr[i] === 'T') {
      tempArr.push(strArr[i], 'A');
    } else if (strArr[i] === 'A') {
      tempArr.push(strArr[i], 'T');
    }
    pairArr.push(tempArr)
  }
  
  return pairArr;
}
