
  window.HashReader = (function() {

    function HashReader() {
      this.window = $(window);
      this.window.bind('hashchange', this.updateLocation);
    }

    HashReader.prototype.updateLocation = function() {
      return this.location = window.location.hash.substring(1);
    };

    return HashReader;

  })();
