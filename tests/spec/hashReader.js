
  describe("hashReader", function() {
    beforeEach(function() {
      return window.hashReader = new HashReader;
    });
    it("exists", function() {
      return expect(window.hashReader).toBeDefined();
    });
    return it('detects hashChanges', function() {
      window.location = '#whatever';
      return expect(window.hashReader.location).toEqual('whatever');
    });
  });
