describe "hashReader", ->
  it "exists", ->
    expect(window.app.hashReader).toBeDefined()

  it "shows on link click", ->
    $('nav a:nth-child(2)').trigger 'click'  
    expect($('.links li:nth-child(1)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(2)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(3)').hasClass('hidden')).toEqual true
    expect($('.links li:nth-child(4)').hasClass('hidden')).toEqual false
    expect($('.links li:nth-child(5)').hasClass('hidden')).toEqual true