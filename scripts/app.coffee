class window.App
  constructor: ->
    @searchBox = new SearchBox @
    @hashReader = new HashReader @