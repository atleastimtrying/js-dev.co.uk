class window.PreferenceManagers
  constructor: (@app)->
    $('header .config').show()
    @favourite = new PreferenceManager @, 'favourite', '<a class="favourite">&#9733;</a>', '<a class="favourite active">&#9733;</a>'
    @reading = new PreferenceManager @, 'read', '<a class="read">-</a>', '<a class="read active">+</a>'
    $('nav').append('<a href="#" class="favourites">favourites</a>')
    $('nav a.favourites').click @favourites

  favourites: ->
    $('.links li').addClass 'hidden'
    $('.links li.favourite').removeClass 'hidden'
    $('.links li a.favourite').show()
    $('nav a.favourites').addClass 'active'

    false

  store: (key, value)-> localStorage.setItem(key, value)

  fetch: (key)-> localStorage.getItem(key) || ''