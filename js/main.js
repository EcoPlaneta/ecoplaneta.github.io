$(document).ready(function(){
    (function(){
        var count = 0;
        $('#toggle').on('click',function(){
        if(count == 0){
            $('#contToggle').css({
                background: '#eeeeee'
            });
            
            $('#menu').css({
                width: '50%'
            });
            if($(window).width() < 512){
                $('#menu').css({
                    width: '100%'
                    });
            }else{
                    $('#menu').css({
                        width: '80%',
                        margin: '0px 30px 0px 0px'
                        });
                    }
            $('#navbar').css({
                background: '#eeeeee',
                height: 'auto'
            });
            $('#logoimg1').css({
                visibility: 'hidden',
                opacity: '0',
            });
            count = 1;
        }else{
            $('#contToggle').css({
                background: 'transparent'
            });
            $('#menu').css({
                width: '0'
            });
            if($(window).width() < 512){
                $('#navbar').css({
                    background: 'transparent',
                    height: '70px'
                });
            }else{
                $('#navbar').css({
                    background: 'transparent',
                });
            }
            $('#logoimg1').css({
                visibility: 'hidden',
                opacity: '1'
            });
            count = 0;
        }
        });
        $('#menu a').on('click', function(){
            $('#contToggle').css({
                background: 'transparent'
            });
            $('#menu').css({
                width: '0'
            });
            count = 0;
        });
    }());
    
    (function(){
        $('.clientToggle').on('click', function(){
            $(this).siblings('.clientInfo').slideToggle();
            
        });
    }());
    //scroll menu
    if($(window).width() < 361){
        $('#pagface').css({
            display: "none!important"
        });
    }
    //scroll elementos
    if($(window).width() < 769){
        $("#btn-iniciar").click(function() {
            if($(window).width() < 520){
                    $('html, body').animate({
                    scrollTop: $("#acercade").offset().top - 3
                    }, 500);
                }else{
                    $('html, body').animate({
                        scrollTop: $("#acercade").offset().top - 80
                        }, 500);
                };
        });
        }else{
            $("#btn-iniciar").click(function() {
                $('html, body').animate({
                scrollTop: $("#acercade").offset().top - 100
                }, 500);
            });
        };
    $("#btn-arriba").click(function(){
        $('html, body').animate({
            scrollTop: $(".espacio").offset().top
        }, 500);
    });
    
}); 
