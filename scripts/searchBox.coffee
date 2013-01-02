class window.SearchBox
  constructor: (@app)->
    @input =  $ '#search'
    @allLinks = $ '.links li a'
    @input.keyup @updateSearchString
    $(@app).bind 'searchfor', @displayLinks

  linksContaining: (searchString)->
    $ ".links li a:containsNC('#{searchString}'), .links li a.#{searchString}"
  
  updateSearchString: =>
    @searchString = @input.val()
    $(@app).trigger 'searchfor', term: @searchString

  displayLinks: (event, message)=>
    if message.term is ''
      @allLinks.parent().removeClass 'hidden'
    else
      @allLinks.parent().addClass 'hidden'
      @linksContaining(message.term).parent().removeClass 'hidden'
