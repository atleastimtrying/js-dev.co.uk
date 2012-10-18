(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.SearchBox = (function() {

    function SearchBox(input) {
      this.displayLinks = __bind(this.displayLinks, this);      this.extendJqueryContains();
      this.input = $(input);
      this.allLinks = $('.links li a');
      this.updateSearchString();
      this.input.keyup(this.displayLinks);
    }

    SearchBox.prototype.linksContaining = function(searchString) {
      return $(".links li a:containsNC('" + searchString + "'), .links li a." + searchString);
    };

    SearchBox.prototype.updateSearchString = function() {
      return this.searchString = this.input.val();
    };

    SearchBox.prototype.displayLinks = function() {
      this.updateSearchString();
      if (this.searchString === '') {
        return this.allLinks.show();
      } else {
        this.allLinks.hide();
        return this.linksContaining(this.searchString).show();
      }
    };

    SearchBox.prototype.extendJqueryContains = function() {
      return $.extend($.expr[":"], {
        "containsNC": function(elem, i, match, array) {
          return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });
    };

    return SearchBox;

  })();

}).call(this);
