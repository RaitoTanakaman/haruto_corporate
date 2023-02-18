hamburger()
function hamburger() {
    $(".nav__hamburger").click(function () {
        $(this).toggleClass('hamburger__btn--active');
        $('.nav__menu--sp').toggleClass('hamburger__menu--active');
        $('html, body').toggleClass('hamburger__html--active');
    });
}


sectionTextFadeIn()
function sectionTextFadeIn() {
    $(".section__text").on("inview", function (event, isInView) {
    if (isInView) {
        setTimeout(() => {
            
            $(this).stop().addClass('text__fadeIn');
        }, 1000);


        if ($(this).parent().hasClass('section__inner--about')) {
            if (isInView) {
                $(this).parent().find('.bg__box--about').stop().addClass('box__fadeIn');
            }
        } else if ($(this).parent().hasClass('section__inner--company')) {
            if (isInView) {
                $(this).parent().find('.bg__box--company').stop().addClass('box__fadeIn');
            }
        } else if ($(this).parent().hasClass('section__inner--works')) {
            if (isInView) {
                $(this).parent().find('.bg__box--works').stop().addClass('box__fadeIn');
            }
        } 
        
    }
    });
}

sectionContactFadeIn()
function sectionContactFadeIn() {
    $('.section__text--contact h2').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).stop().addClass('text__fadeIn');         
        }
    });

    $('.text__main').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).stop().addClass('text__fadeIn');
           
        }
    });
}

sectionImgFadeIn()
function sectionImgFadeIn() {
   
    $(".section__img").on("inview", function (event, isInView) {
        if (isInView) {
                
            $(this).stop().animate({opacity:'1'}, 3000);

        }
    });
}
