$().ready(function(){
    $(function(){
        var ink, d, x, y;
        $(".nav-link").click(function(e){
            if($(this).find(".ink").length === 0){
                $(this).prepend("<span class='ink'></span>");
            }

            ink = $(this).find(".ink");
            ink.removeClass("animate");

            if(!ink.height() && !ink.width()){
                d = Math.max($(this).outerWidth(), $(this).outerHeight());
                ink.css({height: d, width: d});
            }

            x = e.pageX - $(this).offset().left - ink.width()/2;
            y = e.pageY - $(this).offset().top - ink.height()/2;

            ink.css({top: y+'px', left: x+'px'}).addClass("animate");
        });
    });
    function scrollNav() {
      $('.section-link').click(function(e){  
        e.preventDefault();
        /*$('.menu li').removeClass('active');
        $(this).parent().addClass('active');*/
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 85
        }, 400);
      });     
    }
    scrollNav();
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 85;
    $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.menu li.active').removeClass('active');
                    $('.menu li').eq(i).addClass('active');
            }
    });
}).scroll();