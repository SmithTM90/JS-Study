// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  var temp = str.split('');
  var vow = 'aeiou';
  var res = '';
  var tempSuffix = [];
  
  if(vow.indexOf(temp[0]) !== -1) {
    return str + 'way';
  } else {
    while(vow.indexOf(temp[0]) === -1) {
      tempSuffix.push(temp[0]);
      temp.shift();
    }
  }
  res = temp.join('') + tempSuffix.join('') + 'ay'
  
  return res;
}

translatePigLatin("consonant");

translatePigLatin("consonant");
translatePigLatin("algorithm");