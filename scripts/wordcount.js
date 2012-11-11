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
  document.head.innerHTML += "<style>.afwordcount{ opacity:0.3; -webkit-transition:all 0.5s; box-shadow: 3px 3px 6px #ccc; font-family:sans;background:white; border: 1px solid #999; border-radius:4px; padding:19px;position:fixed; top: 50%; left: 50%; width:300px; height:400px; overflow-y:scroll; margin:-220px -170px; z-index:1000;} .afwordcount td{text-align:center; padding:12px 10px; border: 1px solid #eee;} .afwordcount:hover{opacity:1;}</style>"
  document.body.innerHTML += newTable(sorted);
//};