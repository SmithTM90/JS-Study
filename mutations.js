function mutation(arr) {
  var word1 = arr[1].toLowerCase();
  var word2 = arr[0].toLowerCase();
  
  for(i=0;i<word1.length;i++) {
  	if(word2.indexOf(word1[i]) < 0) {
  		return false;
  	}
  }
  		return true;
}

mutation(["hello", "hey"]);