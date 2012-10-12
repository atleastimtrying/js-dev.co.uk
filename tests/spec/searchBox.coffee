describe "the searchbox", ->
  beforeEach ->
    window.searchBox = new SearchBox "#searchBox"
  
  it "exists", ->
    expect(window.searchBox).toBeDefined()

  it "has an input element", ->
    expect(window.searchBox.input).toBeDefined()

  it "gets an array of link items", ->
    expect(window.searchBox.allLinks).toBeDefined()

  it "has the corrent amount of link items", ->
    expect(window.searchBox.allLinks.length).toEqual 5

  it "can record the value of the input to searchString variable", ->
    randy = '#' + Math.floor(Math.random()*16777215).toString 16
    $('#searchBox').val randy
    window.searchBox.updateSearchString()
    expect(window.searchBox.searchString).toEqual randy
  
  it "can select a single jquery object with a search string", ->
    expect(window.searchBox.linksContaining('Toastr').length).toEqual 1

  it "can select a jquery array of elements with a search string", ->
    expect(window.searchBox.linksContaining('Javascript').length).toEqual 3

  it "can show all the links when search string is empty", ->
    $('#searchBox').val ''
    window.searchBox.displayLinks()
    expect($('.links li a:first').css('display')).toNotEqual 'none'

  it "can hide all the links when search string is incompatible", ->
    $('#searchBox').val 'elephants'
    window.searchBox.displayLinks()
    expect($('.links li a:first').css('display')).toEqual 'none'

  it "only shows one element", ->
    $('#searchBox').val 'Hemmingway'
    window.searchBox.displayLinks()
    expect($('.links li:nth-child(1) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(2) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(3) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(4) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(5) a').css('display')).toEqual 'none'

  it "only shows matching elements", ->
    $('#searchBox').val 'with'
    window.searchBox.displayLinks()
    expect($('.links li:nth-child(1) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(2) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(3) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(4) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(5) a').css('display')).toEqual 'none'

  it "ignores capitalization > lower case", ->
    $('#searchBox').val 'javascript'
    window.searchBox.displayLinks()
    expect($('.links li:nth-child(1) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(2) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(3) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(4) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(5) a').css('display')).toEqual 'none'


  it "ignores capitalization > upper case", ->
    $('#searchBox').val 'WItH'
    window.searchBox.displayLinks()
    expect($('.links li:nth-child(1) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(2) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(3) a').css('display')).toEqual 'none'
    expect($('.links li:nth-child(4) a').css('display')).toEqual 'inline'
    expect($('.links li:nth-child(5) a').css('display')).toEqual 'none'
