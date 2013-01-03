
  window.PreferenceManagers = (function() {

    function PreferenceManagers(app) {
      this.app = app;
      $('header .config').show();
      this.favourite = new PreferenceManager(this, 'favourite', '<a class="favourite">&#9733;</a>', '<a class="favourite active">&#9733;</a>');
      this.reading = new PreferenceManager(this, 'read', '<a class="read">-</a>', '<a class="read active">+</a>');
      $('nav').append('<a href="#" class="favourites">favourites</a>');
      $('nav a.favourites').click(this.favourites);
    }

    PreferenceManagers.prototype.favourites = function() {
      $('.links li').addClass('hidden');
      $('.links li.favourite').removeClass('hidden');
      $('.links li a.favourite').show();
      $('nav a.favourites').addClass('active');
      return false;
    };

    PreferenceManagers.prototype.store = function(key, value) {
      return localStorage.setItem(key, value);
    };

    PreferenceManagers.prototype.fetch = function(key) {
      return localStorage.getItem(key) || '';
    };

    return PreferenceManagers;

  })();
