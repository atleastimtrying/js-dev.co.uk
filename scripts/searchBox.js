(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.SearchBox = (function() {

    function SearchBox(app) {
      this.app = app;
      this.displayLinks = __bind(this.displayLinks, this);
      this.updateSearchString = __bind(this.updateSearchString, this);
      this.input = $('#search');
      this.allLinks = $('.links li a');
      this.input.keyup(this.updateSearchString);
      $(this.app).bind('searchfor', this.displayLinks);
    }

    SearchBox.prototype.linksContaining = function(searchString) {
      return $(".links li a:containsNC('" + searchString + "'), .links li a." + searchString);
    };

    SearchBox.prototype.updateSearchString = function() {
      this.searchString = this.input.val();
      return $(this.app).trigger('searchfor', {
        term: this.searchString
      });
    };

    SearchBox.prototype.displayLinks = function(event, message) {
      if (message.term === '') {
        return this.allLinks.parent().removeClass('hidden');
      } else {
        this.allLinks.parent().addClass('hidden');
        return this.linksContaining(message.term).parent().removeClass('hidden');
      }
    };

    return SearchBox;

  })();

}).call(this);
