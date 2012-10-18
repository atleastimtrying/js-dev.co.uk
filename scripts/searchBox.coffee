class window.SearchBox
  constructor: (input)->
    @extendJqueryContains()
    @input =  $ input
    @allLinks = $ '.links li a'
    @updateSearchString()
    @input.keyup @displayLinks
  
  linksContaining: (searchString)->
    $ ".links li a:containsNC('#{searchString}'), .links li a.#{searchString}"
  
  updateSearchString: ->
    @searchString = @input.val()

  displayLinks: =>
    @updateSearchString()
    if @searchString is ''
      @allLinks.show()
    else
      @allLinks.hide()
      @linksContaining(@searchString).show()
  
  extendJqueryContains: ->
    $.extend $.expr[":"], 
      "containsNC": (elem, i, match, array)->
        (elem.textContent or elem.innerText or "").toLowerCase().indexOf((match[3] or "").toLowerCase()) >= 0
      