
  window.App = (function() {

    function App() {
      this.searchBox = new SearchBox(this);
      this.hashReader = new HashReader(this);
    }

    App.prototype.supports_html5_storage = function() {
      return window.localStorage !== null;
    };

    return App;

  })();
