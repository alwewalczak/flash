$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

$("document").ready(function(){
    $(".footer-subtitle").on("click", function(){
        $(".footer-subtitle").removeClass("open");
        $(this).addClass("open");
    })

    var topMenu = $(".menu__list"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // all list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = $(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = $(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // scroll animation
            menuItems.click(function(e){
              var href = $(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : $(id).offset().top-topMenuHeight+1;
              $('html, body').stop().animate({
                  scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

            // bind to scroll
            $(window).scroll(function(){
               // Get container scroll position
               var fromTop = $(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if ($(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";

               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }

            })

            // image gallery with filters
            $(".gallery-filters li").on("click", function(){
                event.preventDefault();
                $(".gallery-filters li").removeClass("snappy");
                $(this).addClass("snappy");
                filter = $(this).attr("gallery-filter");

                $('.gallery-img-holder').each( function() {
                    if (filter == 'all') {
                        $(this).fadeIn(1500);
                    } else {
                        $(this).hide();
                        if ($(this).attr('filter-category') == filter) {
                            $(this).fadeIn(1500);
                        }
                    }
                });
            });
        });
