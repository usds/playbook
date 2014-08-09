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

// jQuery(function($) {
//   $(document).ready( function() {
//     $('#introduction').stickUp({
//                   // parts: {
//                   //   0: 'play1',
//                   //   1: 'play2',
//                   //   2: 'play3',
//                   //   3: 'play4',
//                   //   4: 'play5',
//                   //   5: 'play6',
//                   //   6: 'play7',
//                   //   7: 'play8',
//                   //   8: 'play9',
//                   //   9: 'play10',
//                   //   10: 'play11',
//                   //   11: 'play12',
//                   //   12: 'play13'
//                   // },
//                   // itemClass: 'play_square',
//                   // itemHover: 'active_play'
//                 });
//   });
// });