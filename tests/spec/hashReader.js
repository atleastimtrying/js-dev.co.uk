
  describe("hashReader", function() {
    it("exists", function() {
      return expect(window.app.hashReader).toBeDefined();
    });
    return it("shows on link click", function() {
      $('nav a:nth-child(2)').trigger('click');
      expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual(false);
      expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual(true);
      expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual(false);
      return expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual(true);
    });
  });
