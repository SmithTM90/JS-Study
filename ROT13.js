function rot13(str) { // LBH QVQ VG!

	var decoded = "";
  
  for(var i=0;i<str.length;i++) {
  	
  	var strCode = str[i].charCodeAt();
  	if (strCode === 32) {
  		decoded += String.fromCharCode(32);
  	} else if (strCode === 33) {
  		decoded += String.fromCharCode(33);
  	} else if (strCode === 63) {
  		decoded += String.fromCharCode(63);
  	} else if (strCode === 46) {
  		decoded += String.fromCharCode(46);
  	} else if(strCode - 13 < 65) {
  		decoded += String.fromCharCode(strCode + 13);
  	} else {
  		decoded += String.fromCharCode(strCode - 13);
  	}
  	
  }
  
  return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");