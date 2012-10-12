
$ ->
  allLinks = $ '.links li a'
  linksContaining = (searchString)->
    $(".links li a:contains('#{searchString}'), .links li a.#{searchString}")
  
  displayLinks = ->
    searchString = $(@).val()
    if searchString is ''
      allLinks.show() 
    else
      allLinks.hide()
      linksContaining(searchString).show()
  
  $('#search').keyup displayLinks