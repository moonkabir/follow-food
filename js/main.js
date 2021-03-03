/* ==========================================================================
   Theme name:landing;
   Authore name:Moon kabir;
   Authore URI:;
   ========================================================================== */
/* ==========================================================================
   Index
   ========================================================================== */
// 1.mean-menu(header)
// 2.sticky-menu(header)
// 3.swiper-slider(header)
// 4.swiper-slider(team)
// 5.rate-yo(testimonial)
// 6.swiper-slider(testimonial)
// 7.wow js(full)
(function($) {
    "use strict";
    $(document).ready(function() {
        // ============1.off canvas-meanu============
        var $main_nav = $('#main-nav');
        var $toggle = $('.toggle');
        var defaultData = {
            maxWidth: 980,
            customToggle: $toggle,
            navTitle: 'All Categories',
            levelTitles: true,
            pushContent: '#container',
            insertClose: 2,
            closeLevels: false,
            position: 'right'
        };
        var Nav = $main_nav.hcOffcanvasNav(defaultData);
        // ============2.sticky-menu(header)=============
        $("header").sticky();
        // ============3.swiper-slider(header)=============
        var mySwiper = new Swiper('.hero-swiper-container', {
            speed: 400,
            spaceBetween: 130,
            loop: true,
            slidesPerView: 1,
            direction: 'vertical',
            pagination: {
                el: '.hero-swiper-pagination',
                clickable: true,
            },
        }); 
        // ============4.swiper-slider(team)=============
        var mySwiper = new Swiper('.team-swiper-container', {
            speed: 400,
            spaceBetween: 30,
            loop: true,
            slidesPerView: 3,
            pagination: {
                el: '.team-swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is <= 450px
                450: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 767px
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
        // ============5.rate-yo(testimonial)=============
        if ($(".rateYo1").length) {
            $(".rateYo1").rateYo({
                readOnly: true,
                rating : 5,
                spacing: "2px",
                ratedFill: "#f49d1d",
                normalFill: "#cccccc",
                starWidth: "15px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg viewBox="0 0 15 15" width="15px" height="14px">'+
                '<path d="M7.854,0.232 L9.762,4.644 L14.647,5.053 C14.986,5.082 15.124,5.495 14.867,5.712 L11.162,8.849 L12.272,13.514 C12.349,13.838 11.989,14.092 11.698,13.921 L7.500,11.447 L3.302,13.921 C3.010,14.092 2.652,13.837 2.729,13.514 L3.839,8.849 L0.133,5.712 C-0.124,5.494 0.013,5.081 0.352,5.053 L5.237,4.643 L7.145,0.232 C7.278,-0.075 7.722,-0.075 7.854,0.232 Z"></path>'+
                '</svg>'
            });
        }
        if ($(".rateYo2").length) {
            $(".rateYo2").rateYo({
                readOnly: true,
                rating : 4.5,
                spacing: "2px",
                ratedFill: "#f49d1d",
                normalFill: "#cccccc",
                starWidth: "15px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg viewBox="0 0 15 15" width="15px" height="14px">'+
                '<path d="M7.854,0.232 L9.762,4.644 L14.647,5.053 C14.986,5.082 15.124,5.495 14.867,5.712 L11.162,8.849 L12.272,13.514 C12.349,13.838 11.989,14.092 11.698,13.921 L7.500,11.447 L3.302,13.921 C3.010,14.092 2.652,13.837 2.729,13.514 L3.839,8.849 L0.133,5.712 C-0.124,5.494 0.013,5.081 0.352,5.053 L5.237,4.643 L7.145,0.232 C7.278,-0.075 7.722,-0.075 7.854,0.232 Z"></path>'+
                '</svg>'
            });
        }
        if ($(".rateYo3").length) {
            $(".rateYo3").rateYo({
                readOnly: true,
                rating : 3.7,
                spacing: "2px",
                ratedFill: "#f49d1d",
                normalFill: "#cccccc",
                starWidth: "15px",
                "starSvg": '<svg xmlns="http://www.w3.org/2000/svg viewBox="0 0 15 15" width="15px" height="14px">'+
                '<path d="M7.854,0.232 L9.762,4.644 L14.647,5.053 C14.986,5.082 15.124,5.495 14.867,5.712 L11.162,8.849 L12.272,13.514 C12.349,13.838 11.989,14.092 11.698,13.921 L7.500,11.447 L3.302,13.921 C3.010,14.092 2.652,13.837 2.729,13.514 L3.839,8.849 L0.133,5.712 C-0.124,5.494 0.013,5.081 0.352,5.053 L5.237,4.643 L7.145,0.232 C7.278,-0.075 7.722,-0.075 7.854,0.232 Z"></path>'+
                '</svg>'
            });
        }
        // ============6.swiper-slider(testimonial)=============
        var mySwiper = new Swiper('.testimonial-swiper-container', {
            speed: 400,
            spaceBetween: 100,
            loop: true,
            slidesPerView: 1,
            navigation: {
              nextEl: '.client-next',
              prevEl: '.client-prev',
            },
            breakpoints: {
                // when window width is <= 767px
                767: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
          });
        // ============7.wow js(full)=============
        $(document).ready(function(){
            new WOW().init();
        });
    }); //ready Function
    $(window).on('load', function() {});
})(jQuery)