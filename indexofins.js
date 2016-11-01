function getIndexToIns(arr, num) {
	
	arr = arr.sort(function(a, b){return a-b});
	
	if(num === arr[0]) {
		arr.unshift(num);
		console.log('if ' + arr);
		return arr.indexOf(num);
	} else {
		arr.push(num);
		arr.sort(function(a, b){return a-b});
		console.log('else ' + arr);
		return arr.indexOf(num);
	}
}

getIndexToIns([40, 60], 50);