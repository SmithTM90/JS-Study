//Convert the string's &,<,>,",' to it's HTML entity format

function convertHTML(str) {
  // &colon;&rpar;
  var split = str.split('');
  var newArray = [];
  split.forEach(function(i){
    switch (i) {
      case '&':
        newArray.push('&amp;');
        break;
      case '<':
        newArray.push('&lt;');
        break;
      case '>':
        newArray.push('&gt;');
        break;
      case '"':
        newArray.push('&quot;');
        break;
      case "'":
        newArray.push('&apos;');
        break;
      default:
        newArray.push(i);
        break; 
    }

  });
  return newArray.join('');
}

convertHTML("Dolce & Gabbana");