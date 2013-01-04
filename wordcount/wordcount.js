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
  
  var getData =function(){
    var response = {};
    if(document.getElementsByTagName('title')[0]){
      response.title = document.getElementsByTagName('title').innerHTML;
    }
    if(document.getElementsByTagName('h1')[0]){
      response.h1 = document.getElementsByTagName('h1')[0].innerHTML;
    }
    if(document.getElementsByTagName('h2')[0]){
      response.h2 = document.getElementsByTagName('h2')[0].innerHTML;
    }
    var metas = document.getElementsByTagName('meta');
    var links = document.getElementsByTagName('link');
    for(var i = 0, l = metas.length; i < l; i++){
      if(metas[i].getAttribute('name') === 'description'){
        response.description = metas[i].getAttribute('content');
      }
      if(metas[i].getAttribute('name') === 'robots'){
        response.robots = metas[i].getAttribute('value');
      }
    }
    for(var i = 0, l = links.length; i < l; i++){
      if(links[i].getAttribute('rel') === 'canonical'){
        response.canonical = links[i].getAttribute('href');
      }
    }
    return response;
  };

  var newBox = function(){
    var data = getData();
    var boxString = "<div class='wordcount-right'>";
    if(data.title){
      boxString += "<p>title: <span>" + data.title + "</span></p>";
    }
    if(data.description){
      boxString += "<p>description: <span>" + data.description + "</span></p>";
    }
    if(data.canonical){
      boxString += "<p>canonical: <span>" + data.canonical + "</span></p>";
    }
    if(data.robots){
      boxString += "<p>robots: <span>" + data.robots + "</span></p>";
    }
    if(data.h1){
      boxString += "<p>H1: <span>" + data.h1 + "</span></p>";
    }
    if(data.h2){
      boxString += "<p>H2: <span>" + data.h2 + "</span></p>";
    }
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
    document.getElementsByClassName('wordcount-question-container')[0].appendChild(img);
    question.value = '';
    return false;
  };

  a = document.createElement('link');
  a.setAttribute('href', 'http://js-dev.co.uk/wordcount/wordcount.css');
  a.setAttribute('rel', 'stylesheet');
  h = document.getElementsByTagName('head')[0];
  h.appendChild(a);
  
  document.body.innerHTML += newWindow();
  document.getElementsByClassName('afclose')[0].onclick = closeWindow;
  document.getElementById('wordcount-question-submit').onclick = submitQuestion;

})();