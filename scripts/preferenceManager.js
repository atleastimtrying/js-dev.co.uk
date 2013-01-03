(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.PreferenceManager = (function() {

    function PreferenceManager(parent, keyword, inactive, active) {
      this.parent = parent;
      this.keyword = keyword;
      this.inactive = inactive;
      this.active = active;
      this.toggle = __bind(this.toggle, this);
      this.display = __bind(this.display, this);
      this.showThem = __bind(this.showThem, this);
      this.showing = false;
      this.data = this.parent.fetch('js-dev-' + this.keyword);
      $('.config a.' + this.keyword).click(this.showThem);
      $('.links li a.' + this.keyword).live('click', this.toggle);
      $('.links li').each(this.display);
    }

    PreferenceManager.prototype.showThem = function() {
      if (this.showing) {
        $('.links li a.' + this.keyword).hide();
        this.showing = false;
      } else {
        $('.links li a.' + this.keyword).css('display', 'inline-block');
        $('.links li.' + this.keyword).css('display', 'inline-block');
        this.showing = true;
      }
      return false;
    };

    PreferenceManager.prototype.display = function(index, element) {
      var html;
      html = this.inactive;
      if (this.stored($(element).find('a.link').attr('data-id'))) {
        html = this.active;
        $(element).addClass(this.keyword);
      }
      return $(element).append(html);
    };

    PreferenceManager.prototype.stored = function(id) {
      return this.data.indexOf(id) !== -1;
    };

    PreferenceManager.prototype.toggle = function(event) {
      var needle;
      needle = $(event.currentTarget).siblings().attr('data-id');
      if (this.data.indexOf(needle) !== -1) {
        this.data = this.data.replace('|' + needle, '');
        $(event.currentTarget).parent().removeClass(this.keyword);
        $(event.currentTarget).removeClass('active');
      } else {
        this.data += '|' + needle;
        $(event.currentTarget).parent().addClass(this.keyword);
        $(event.currentTarget).addClass('active');
      }
      this.parent.store('js-dev-' + this.keyword, this.data);
      return false;
    };

    return PreferenceManager;

  })();

}).call(this);
