// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
     'k',
     'l',
     'm',
     'n',
     'o',
     'p',
     'q',
     'r',
     's',
     't',
     'u',
     'v',
     'w',
     'x',
     'y',
     'z'
  ];
  
  var startingPoint = alphabet.indexOf(str[0]);
  
  for(var i = 0; i < str.length; i++){
    if(str[i] !== alphabet[i + startingPoint]){
      return alphabet[i + startingPoint];
    }
  }
  return undefined;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");