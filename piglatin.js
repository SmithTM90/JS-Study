function translatePigLatin(str) {
  var strArr = [];
  
  strArr = str.split('');
  console.log(strArr);
  
  for(var i=0;i<strArr.length;i++) {
    switch(strArr[0]) {
      case 'a':
        console.log('a: ' + strArr.slice(strArr[0], strArr[1]));
        break;
      case 'e':
        console.log('e:' + strArr[strArr.indexOf(strArr[i])]);
        break;
      case 'i':
        console.log('i:' + strArr[strArr.indexOf(strArr[i])]);
        break;
      case 'o':
        console.log('o:' + strArr[strArr.indexOf(strArr[i])]);
        break;
      case 'u':
        console.log('u:' + strArr[strArr.indexOf(strArr[i])]);
        break;
      case 'y':
        console.log('y:' + strArr[strArr.indexOf(strArr[i])]);
        break;
      default:
        console.log('default');
    }
    
  }
  
  return str;
}

CHAR AT, INDEX OF

translatePigLatin("consonant");
translatePigLatin("algorithm");