
  window.App = (function() {

    function App() {
      this.searchBox = new SearchBox(this);
      this.hashReader = new HashReader(this);
    }

    return App;

  })();
