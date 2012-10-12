
$ ->
  links = $ '.links li a'
  $('#search').keyup ->
    val = $(@).val()
    links.hide()
    $(".links li a:contains('#{val}')").show()
    $(".links li a.#{val}").show()
    links.show() if val is ''
