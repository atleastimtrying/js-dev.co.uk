class window.HashReader
  constructor: (@app)->
    @updateLocation()
    $(window).bind 'hashchange', @updateLocation
  
  updateLocation: =>
    @location = window.location.hash.substring 1
    $(@app).trigger 'searchfor', term: @location
    