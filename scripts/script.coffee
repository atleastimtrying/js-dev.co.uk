$ ->
  $.extend $.expr[":"], 
    "containsNC": (elem, i, match, array)->
      (elem.textContent or elem.innerText or "").toLowerCase().indexOf((match[3] or "").toLowerCase()) >= 0
  window.app = new App