(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.HashReader = (function() {

    function HashReader(app) {
      this.app = app;
      this.updateLocation = __bind(this.updateLocation, this);
      this.updateLocation();
      $(window).bind('hashchange', this.updateLocation);
    }

    HashReader.prototype.updateLocation = function() {
      this.location = window.location.hash.substring(1);
      return $(this.app).trigger('searchfor', {
        term: this.location
      });
    };

    return HashReader;

  })();

}).call(this);
