//makes sure function excuted only after page finish loading 
//and protects variables to prevent them from being global variables
$(function(){
    
    //Handles layout while resizing window because 
    //no scroll action takes place to call scroll function
    $(window).resize(function () {
        $("header div#topNav-1").css('display', 'block');
        if($(window).width() <= 767){ // <768 to accomodate for scrollbar
            $("header nav").css('margin-top', '187px');
        }else{
            $("header nav").css('margin-top', '129px');
        }
    });
    
    var scroll_start = 0;
    var bluebg = $('#bluebg');
    var offset = bluebg.offset();

    //handles appearance of logo and social nav depending on location of page scroll
    if (bluebg.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop()+129;
            if(scroll_start > offset.top) {
                $("header div#topNav-1").css('display', 'none');
                $("header nav").css('margin-top', '0');
            } else {
                $("header div#topNav-1").css('display', 'block');
                if($(window).width() <= 767){
                    $("header nav").css('margin-top', '187px');
                }else{
                    $("header nav").css('margin-top', '129px');
                }
            }
        });
    }
});