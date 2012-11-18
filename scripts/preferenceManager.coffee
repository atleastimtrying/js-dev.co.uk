class window.PreferenceManager
  constructor: (@parent, @keyword, @inactive, @active)->
    @showing = no
    @data = @parent.fetch 'js-dev-' + @keyword
    $('.config a.'+ @keyword).click @showThem
    $('.links li a.'+ @keyword).live 'click', @toggle
    $('.links li').each @display

  showThem: =>
    if @showing
      $('.links li a.' + @keyword).hide()
      $('.links li.' + @keyword).hide() if @keyword is 'read'
      @showing = no
    else
      $('.links li a.' + @keyword).css('display', 'inline-block')
      $('.links li.' + @keyword).css('display', 'inline-block')
      @showing = yes
    false
  
  display: (index,element)=>
    html = @inactive
    if @stored $(element).find('a.link').attr 'data-id'
      html = @active 
      $(element).addClass @keyword
    $(element).append html

  stored : (id)-> @data.indexOf(id) isnt -1
  
  toggle: (event)=>
    needle = $(event.currentTarget).siblings().attr 'data-id'
    if @data.indexOf(needle) isnt -1
      @data = @data.replace('|' + needle, '')
      $(event.currentTarget).parent().removeClass @keyword
      $(event.currentTarget).removeClass('active')
    else
      @data += '|' + needle
      $(event.currentTarget).parent().addClass @keyword
      $(event.currentTarget).addClass('active')
    @parent.store 'js-dev-' + @keyword, @data
    false