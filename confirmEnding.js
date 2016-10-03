function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lastElm = str.substring(str.length - target.length);
  if(lastElm === target) {
  	return true;
  } else {
  	return false;
  }
}
confirmEnding("He has to give me a new name", "name");