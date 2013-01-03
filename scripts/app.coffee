class window.App
  constructor: ->
    @searchBox = new SearchBox @
    @hashReader = new HashReader @
    #@preferenceManagers = new PreferenceManagers @ if @supports_html5_storage()

  supports_html5_storage: -> window.localStorage isnt null