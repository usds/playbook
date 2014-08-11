$(function(){
  $(document).ready( function() {
    var navBarHeight = $('#navigation_bar').height();
    var showNavBarMinimum = $('#introduction').height() - navBarHeight;

    $(window).scroll(function() {
      var scroll = getCurrentScroll();
        if ( scroll >= showNavBarMinimum ) {
          $('#navigation_bar').addClass('show');
        }
        else {
          $('#navigation_bar').removeClass('show');
        }
      });
    function getCurrentScroll() {
      return window.pageYOffset;
    }
  });
});

$(function($) {
  $(document).ready( function() {
    $('#navigation_bar').stickUp({
                  parts: {
                    0: 'play1',
                    1: 'play2',
                    2: 'play3',
                    3: 'play4',
                    4: 'play5',
                    5: 'play6',
                    6: 'play7',
                    7: 'play8',
                    8: 'play9',
                    9: 'play10',
                    10: 'play11',
                    11: 'play12',
                    12: 'play13'
                  },
                  itemClass: 'play_square',
                  itemHover: 'active_play'
                });
  });
});

$(function() {
  // Scroll Animations
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});