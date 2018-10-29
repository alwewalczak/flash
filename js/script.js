$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});


// scrollspy navigation
// $("document").ready(function($){
//     $(window).scroll (function() {
//         var currentTop = $(window).scrollTop();
//         var elems = $('.scrollspy');
//         elems.each(function(index){
//           var elemTop 	= $(this).offset().top;
//           var elemBottom 	= elemTop + $(this).height();
//           if(currentTop >= elemTop && currentTop <= elemBottom){
//             var id 		= $(this).attr('id');
//             var navElem = $('a[href="#' + id+ '"]');
//         navElem.parent().addClass('active').siblings().removeClass( 'active' );
//           }
//       })
//   });
//
// });
