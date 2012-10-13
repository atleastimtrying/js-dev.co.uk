describe "the searchbox", ->
  
  it "exists", ->
    expect(window.app.searchBox).toBeDefined()

  it "has an input element", ->
    expect(window.app.searchBox.input).toBeDefined()

  it "gets an array of link items", ->
    expect(window.app.searchBox.allLinks).toBeDefined()

  it "has the corrent amount of link items", ->
    expect(window.app.searchBox.allLinks.length).toEqual 5

  it "can record the value of the input to searchString variable", ->
    $.extend $.expr[":"], 
      "containsNC": (elem, i, match, array)->
        (elem.textContent or elem.innerText or "").toLowerCase().indexOf((match[3] or "").toLowerCase()) >= 0
    randy = 'randall'
    $('#search').val randy
    window.app.searchBox.updateSearchString()
    expect(window.app.searchBox.searchString).toEqual randy

  it "can select a single jquery object with a search string", ->
    expect(window.app.searchBox.linksContaining('Toastr').length).toEqual 1

  it "can select a jquery array of elements with a search string", ->
    expect(window.app.searchBox.linksContaining('Javascript').length).toEqual 3

  it "can show all the links when search string is empty", ->
    $(window.app).trigger 'searchfor', term: ''
    expect($('.links li:first').hasClass('hidden')).toEqual false

  it "can hide all the links when search string is incompatible", ->
    $(window.app).trigger 'searchfor', term: 'elephants'
    expect($('.links li:first').hasClass('hidden')).toEqual true

  it "only shows one element", ->
    $(window.app).trigger 'searchfor', term: 'Hemmingway'
    expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual true

  it "only shows matching elements", ->
    $(window.app).trigger 'searchfor', term: 'with'
    expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual true

  it "ignores capitalization > lower case", ->
    $(window.app).trigger 'searchfor', term: 'javascript'
    expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual true


  it "ignores capitalization > upper case", ->
    $(window.app).trigger 'searchfor', term: 'WiTH'
    expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual true
