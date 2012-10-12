
  $(function() {
    var links;
    links = $('.links li a');
    return $('#search').keyup(function() {
      var val;
      val = $(this).val();
      links.hide();
      $(".links li a:contains('" + val + "')").show();
      $(".links li a." + val).show();
      if (val === '') return links.show();
    });
  });
