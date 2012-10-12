
  describe("the searchbox", function() {
    beforeEach(function() {
      return window.searchBox = new SearchBox("#searchBox");
    });
    it("exists", function() {
      return expect(window.searchBox).toEqual(new SearchBox("#searchBox"));
    });
    it("has an input element", function() {
      return expect(window.searchBox.input).toBeDefined();
    });
    it("gets an array of link items", function() {
      return expect(window.searchBox.allLinks).toBeDefined();
    });
    it("has the corrent amount of link items", function() {
      return expect(window.searchBox.allLinks.length).toEqual(5);
    });
    it("can record the value of the input to searchString variable", function() {
      var randy;
      randy = '#' + Math.floor(Math.random() * 16777215).toString(16);
      $('#searchBox').val(randy);
      window.searchBox.updateSearchString();
      return expect(window.searchBox.searchString).toEqual(randy);
    });
    it("can select a single jquery object with a search string", function() {
      return expect(window.searchBox.linksContaining('Toastr').length).toEqual(1);
    });
    it("can select a jquery array of elements with a search string", function() {
      return expect(window.searchBox.linksContaining('Javascript').length).toEqual(3);
    });
    it("can show all the links when search string is empty", function() {
      $('#searchBox').val('');
      window.searchBox.displayLinks();
      return expect($('.links li a:first').css('display')).toNotEqual('none');
    });
    it("can hide all the links when search string is incompatible", function() {
      $('#searchBox').val('elephants');
      window.searchBox.displayLinks();
      return expect($('.links li a:first').css('display')).toEqual('none');
    });
    it("only shows one element", function() {
      $('#searchBox').val('Hemmingway');
      window.searchBox.displayLinks();
      expect($('.links li:nth-child(1) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(2) a').css('display')).toEqual('inline');
      expect($('.links li:nth-child(3) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(4) a').css('display')).toEqual('none');
      return expect($('.links li:nth-child(5) a').css('display')).toEqual('none');
    });
    it("only shows matching elements", function() {
      $('#searchBox').val('with');
      window.searchBox.displayLinks();
      expect($('.links li:nth-child(1) a').css('display')).toEqual('inline');
      expect($('.links li:nth-child(2) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(3) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(4) a').css('display')).toEqual('inline');
      return expect($('.links li:nth-child(5) a').css('display')).toEqual('none');
    });
    it("ignores capitalization > lower case", function() {
      $('#searchBox').val('javascript');
      window.searchBox.displayLinks();
      expect($('.links li:nth-child(1) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(2) a').css('display')).toEqual('inline');
      expect($('.links li:nth-child(3) a').css('display')).toEqual('inline');
      expect($('.links li:nth-child(4) a').css('display')).toEqual('inline');
      return expect($('.links li:nth-child(5) a').css('display')).toEqual('none');
    });
    return it("ignores capitalization > upper case", function() {
      $('#searchBox').val('WItH');
      window.searchBox.displayLinks();
      expect($('.links li:nth-child(1) a').css('display')).toEqual('inline');
      expect($('.links li:nth-child(2) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(3) a').css('display')).toEqual('none');
      expect($('.links li:nth-child(4) a').css('display')).toEqual('inline');
      return expect($('.links li:nth-child(5) a').css('display')).toEqual('none');
    });
  });
