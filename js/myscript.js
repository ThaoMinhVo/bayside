//makes sure function excuted only after page finish loading 
//and protects variables to prevent them from being global variables
$(function(){
    
    var scroll_start = 0;
    var banner = $('#banner');
    var offset = banner.offset();
    
    //Handles layout while resizing window because 
    //no scroll action takes place to call scroll function
    $(window).resize(function () {
        if (banner.length){
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $("header div#topNav-1").css('display', 'none');
                    //adds nav-logo to front of navbar
                    //breaks code... why???
                    //$("header .navbar .navbar-nav .nav-logo").css.('display','inline')
                    $("header nav").css('margin-top', '0');
                } else {
                    $("header div#topNav-1").css('display', 'block');
                    //$("header .navbar .navbar-nav .nav-logo").css.('display','none')
                    if($(window).width() <= 767){
                        $("header nav").css('margin-top', '187px');
                    }else{
                        $("header nav").css('margin-top', '129px');
                    }
                }
            });
        }
    });

    //handles appearance of logo and social nav depending on location of page scroll
    if (banner.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $("header div#topNav-1").css('display', 'none');
                //adds nav-logo to front of navbar
                //breaks code... why???
                //$("header .navbar .navbar-nav .nav-logo").css.('display','inline')
                $("header nav").css('margin-top', '0');
            } else {
                $("header div#topNav-1").css('display', 'block');
                //$("header .navbar .navbar-nav .nav-logo").css.('display','none')
                if($(window).width() <= 767){
                    $("header nav").css('margin-top', '187px');
                }else{
                    $("header nav").css('margin-top', '129px');
                }
            }
        });
    }
});