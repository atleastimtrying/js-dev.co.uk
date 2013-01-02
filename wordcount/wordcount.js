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
    return "<li><span>" + (index + 1) + "</span> : " + word + "</li>\n";
  };
  
  var newWindow = function(){
    return "<div id='afwordcount' draggable='true'><a href='#' class='afclose'>x</a>" + newList(sorted) + newBox();
  };

  var newList = function(arr){
    var listString = "<ul><li><span>Rank</span> : Word</li>";
    for(var i = 0, l = arr.length; i < l; ++i){
      listString += newLi(i, arr[i]);
    }
    listString += "</ul>";
    return listString;
  };
  
  var getMeta =function(){
    var metas = document.getElementsByTagName('meta');
    var string = '<ul>';
    for(var i = 0, l = metas.length; i < l; ++i){
      if(metas[i].getAttribute('name')){
        string += '<li>' + metas[i].getAttribute("name") + ' : ' + metas[i].getAttribute("content") + '</li>' 
      }
    }
    string += '</ul>';
    return string;
  };

  var newBox = function(){
    var boxString = "<div class='wordcount-right'>";
    boxString += "<p>title: <span id='wordcount-title'>" + document.getElementsByTagName('title').innerHTML + "</span></p>";
    boxString += "<p>desc: <span id='wordcount-desc'>" + document.getElementsByTagName('title').innerHTML + "</span></p>";
    boxString += "<p>H1s: <span id='wordcount-h1'>" + document.getElementsByTagName('h1').length + "</span></p>";
    boxString += getMeta();
    boxString += "<div class='wordcount-question-container'><input type='email' id='wordcount-email' placeholder='Email'><input type='text' id='wordcount-question' placeholder='Ask us a Question'><a href='#' id='wordcount-question-submit'>Go!</a></div>";
    boxString += "</div></div>";
    return boxString;
  };

  var closeWindow = function(event){
    event.preventDefault();
    document.getElementById('afwordcount').style.display = 'none';
  };
  var submitQuestion = function(event){
    var question = document.getElementById('wordcount-question');
    var email = document.getElementById('wordcount-email');
    var img = document.createElement('img');
    img.src = 'http://imgtoparams.herokuapp.com/img.png?question=' + encodeURI(question.value) + '&email=' + encodeURI(email.value);
    document.getElementsByClassName('wordcount-question-container').appendChild(img);
    question.value = '';
    return false;
  };

  a = document.createElement('link');
  a.setAttribute('href', 'http://js-dev.co.uk/wordcount/wordcount.css');
  //a.setAttribute('href', 'wordcount.css');
  a.setAttribute('rel', 'stylesheet');
  h = document.getElementsByTagName('head')[0];
  h.appendChild(a);
  
  document.body.innerHTML += newWindow();
  document.getElementsByClassName('afclose')[0].onclick = closeWindow;
  document.getElementById('wordcount-question-submit').onclick = submitQuestion;

})();