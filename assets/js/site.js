$(function(){

  var $navBar = $('#navigation_bar');
  var showNavBarMinimum = $('#introduction').height() - $navBar.height();

  var wasNavBarVisible = false;
  // change nav bar visibility on scroll
  function onScroll() {
    var isNavBarVisible = window.pageYOffset >= showNavBarMinimum;
    if ( isNavBarVisible != wasNavBarVisible ) {
      $navBar.toggleClass('show');
      wasNavBarVisible = isNavBarVisible;
    }
  }
  // initial check
  onScroll();

  // http://davidwalsh.name/function-debounce
  function debounce( fn, wait ) {
    var timeout;
    return function() {
      var _this = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        fn.apply( _this, args );
      };
      clearTimeout( timeout );
      timeout = setTimeout( later, wait || 100 );
    };
  };

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
  $(window).scroll( debounce( onScroll ) );

  });
});

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