describe "preferenceManager", ->
  it "exists", ->
    expect(window.app.preferenceManager).toBeDefined()
  it "does nothing when localStorage is missing", ->
    window.localStorage = null
    expect(window.app.preferenceManager.active).toBe false