describe "hashReader", ->
  beforeEach ->
    window.hashReader = new HashReader
  it "exists", ->
    expect(window.hashReader).toBeDefined()
  
  it 'detects hashChanges', ->
    window.location = '#whatever'
    expect(window.hashReader.location).toEqual 'whatever'