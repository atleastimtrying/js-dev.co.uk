
  $(function() {
    var allLinks, displayLinks, linksContaining;
    allLinks = $('.links li a');
    linksContaining = function(searchString) {
      return $(".links li a:contains('" + searchString + "'), .links li a." + searchString);
    };
    displayLinks = function() {
      var searchString;
      searchString = $(this).val();
      if (searchString === '') {
        return allLinks.show();
      } else {
        allLinks.hide();
        return linksContaining(searchString).show();
      }
    };
    return $('#search').keyup(displayLinks);
  });
