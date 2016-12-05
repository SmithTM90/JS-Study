function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  // console.log(sourceKeys);
  
  for(var i=0;i<collection.length;i++) {
    for(var x=0;x<sourceKeys.length;x++) {
      if(sourceKeys.length > 1) {
        if(collection[i].hasOwnProperty(sourceKeys[x]) && collection[i].hasOwnProperty(sourceKeys[x + 1])) {
          // console.log(collection[i]);
          arr.push(collection[i]);
        }
      } else if(sourceKeys.length <= 1) {
        if(collection[i].last === source.last) {
          console.log(collection[i].last);
          arr.push(collection[i]);
        }
      }
    }
       
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });