(function (){
  var words = document.body.innerText.toLowerCase().split(/\W+/);
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

  var newLi = function(index,word){
    return "<li><span>" + (index + 1) + "</span>" + word + "</li>\n";
  };
  var newWindow = function(){
    return "<div class='afwordcount'><a href='#' class='afclose'>x</a>" + newTable(sorted) + newBox();
  }
  var newList = function(arr){
    var listString = "<ul><li><span>Rank</span>Word</li>";
    for(var i = 0, l = arr.length; i < l; ++i){
      listString += newLi(i, arr[i]);
    }
    listString += "</ul>";
    return listString;
  };
  
  var newBox = function(){
    var boxString = "<div class='wordcount-right'>";
    boxString += "<p>titles: <span id='wordcount-titles'>" + document.getElementsByTagName('title').length + "</span></p>";
    boxString += "<p>H1s: <span id='wordcount-h1'>" + document.getElementsByTagName('h1').length + "</span></p>";
    boxString += "</div></div>";
    return boxString;
  };

  var closeWindow = function(event){
    event.preventDefault();
    document.getElementsByClassName('afwordcount')[0].style.display = 'none';
  };
  
  a = document.createElement('link');
  a.setAttribute('href', 'http://js-dev.co.uk/wordcount/wordcount.css');
  a.setAttribute('rel', 'stylesheet');
  h = document.getElementsByTagName('head')[0];
  h.appendChild(a);
  
  document.body.innerHTML += newWindow();
  document.getElementsByClassName('afclose')[0].onclick = closeWindow;

})();