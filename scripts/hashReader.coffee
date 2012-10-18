class window.HashReader
  constructor: ->
    @window = $ window
    @window.bind 'hashchange', @updateLocation
  
  updateLocation: ->
    @location = window.location.hash.substring(1);