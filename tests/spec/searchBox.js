
  describe("the searchbox", function() {
    it("exists", function() {
      return expect(window.app.searchBox).toBeDefined();
    });
    it("has an input element", function() {
      return expect(window.app.searchBox.input).toBeDefined();
    });
    it("gets an array of link items", function() {
      return expect(window.app.searchBox.allLinks).toBeDefined();
    });
    it("has the corrent amount of link items", function() {
      return expect(window.app.searchBox.allLinks.length).toEqual(5);
    });
    it("can record the value of the input to searchString variable", function() {
      var randy;
      $.extend($.expr[":"], {
        "containsNC": function(elem, i, match, array) {
          return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });
      randy = 'randall';
      $('#search').val(randy);
      window.app.searchBox.updateSearchString();
      return expect(window.app.searchBox.searchString).toEqual(randy);
    });
    it("can select a single jquery object with a search string", function() {
      return expect(window.app.searchBox.linksContaining('Toastr').length).toEqual(1);
    });
    it("can select a jquery array of elements with a search string", function() {
      return expect(window.app.searchBox.linksContaining('Javascript').length).toEqual(3);
    });
    it("can show all the links when search string is empty", function() {
      $(window.app).trigger('searchfor', {
        term: ''
      });
      return expect($('.links li:first').hasClass('hidden')).toEqual(false);
    });
    it("can hide all the links when search string is incompatible", function() {
      $(window.app).trigger('searchfor', {
        term: 'elephants'
      });
      return expect($('.links li:first').hasClass('hidden')).toEqual(true);
    });
    it("only shows one element", function() {
      $(window.app).trigger('searchfor', {
        term: 'Hemmingway'
      });
      return expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual(true);
    });
    it("only shows matching elements", function() {
      $(window.app).trigger('searchfor', {
        term: 'with'
      });
      expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual(false);
      expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual(false);
      return expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual(true);
    });
    it("ignores capitalization > lower case", function() {
      $(window.app).trigger('searchfor', {
        term: 'javascript'
      });
      expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual(false);
      expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual(false);
      expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual(false);
      return expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual(true);
    });
    return it("ignores capitalization > upper case", function() {
      $(window.app).trigger('searchfor', {
        term: 'WiTH'
      });
      expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual(false);
      expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual(false);
      return expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual(true);
    });
  });
