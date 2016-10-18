function truncateString(str, num) {

  if (str.length > num) {
  	var newStr = str.slice(0, num-3)
  	return newStr + '...';
  }
 
}