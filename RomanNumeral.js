function convertToRoman(num) { 
 var string = '';
 var mP = parseInt((num / 1000));
 var rNum = num - (mP * 1000);
 console.log(rNum);
 
 var dP = parseInt((rNum / 500));
 rNum = rNum - (dP * 500);
 console.log(rNum);
 
 var cP = parseInt((rNum / 100));
 rNum = rNum - (cP * 100);
 console.log(rNum);
 
 var lP = parseInt((rNum / 50));
 rNum = rNum - (lP * 50);
 console.log(rNum);
 
 var xP = parseInt((rNum / 10));
 rNum = rNum - (xP * 10);
 console.log(rNum);
 
 var vP = parseInt((rNum / 5));
 rNum = rNum - (vP * 5);
 console.log(rNum);
 
 var iP = parseInt((rNum / 1));
 rNum = rNum - (iP * 1);
 
 console.log(rNum);
 
var dupLet = function(letter, times) {
  var output = '';
  for (var i=0; i<times; i++) {
    output += letter;
  }
  return output;
};
 
  string = dupLet("M", mP) + dupLet("D", dP) + dupLet("C", cP) + dupLet("L", lP) +
    dupLet("X", xP) + dupLet("V", vP) + dupLet("I", iP);

  string = string.replace(/DC{4}/, "CM");
  string = string.replace(/C{4}/, "CD");
  string = string.replace(/LX{4}/, "XC");
  string = string.replace(/X{4}/, "XL");
  string = string.replace(/VI{4}/, "IX");
  string = string.replace(/I{4}/, "IV");
 
return string;
}

convertToRoman(36);
