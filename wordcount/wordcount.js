//window.onload = function(){
  var words = document.body.innerText.toLowerCase().split(' ');
  var obj = {};
  var output = [];
  var sorted = [];
  words.forEach(function(word){ obj[word] = 0; });
  words.forEach(function(word){
    for(key in obj) {
      if(key === word){
        obj[key] += 1;
      }
    }
  });
  // Turn { lots: 5, some: 3, few: 1} to [ #, [few], #, [some], #, [lots] ]
  for(var word in obj) {
    output[obj[word]] = (output[obj[word]] || []);
    output[obj[word]].push(word);
  }
  output.reverse().forEach(function(result) { 
    if(result) { 
      result.forEach(function(answer) {
        sorted.push(answer)
      });
    } 
  });
  var newRow = function(index,word){
    return "<tr><td>" + index + "</td><td>" + word + "</td></tr>\n";
  };
  var newTable = function(arr){
    tableString = "<div class='afwordcount'><table><tr><th>Rank</th><th>Word</th></tr>";
    for(var i = 0, l = arr.length; i < l; ++i){
      tableString += newRow(i, arr[i]);
    }
    tableString += "</table></div>";
    return tableString;
  };
  a = document.createElement('link');
  a.setAttribute('href', 'http://js-dev.co.uk/wordcount/wordcount.css');
  a.setAttribute('rel', 'stylesheet');
  h = document.getElementsByTagName('head')[0];
  h.appendChild(a); }());
  document.body.innerHTML += newTable(sorted);
//};