
(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
          
            // PRETTYPHOTO FUNCTION 
            $("a.preview").prettyPhoto({
                social_tools: false
            });

          
            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    
    // Initializing ///
    $(document).ready(function () {
        mainApp.main_fun();
    });


    const elements_right = document.querySelectorAll(".fade-right");
    const elements_left = document.querySelectorAll(".fade-left");
    const elements_top = document.querySelectorAll(".fade-top");
    const elements_bottom = document.querySelectorAll(".fade-bottom");
    function triggerAnimation(entries) {
        entries.forEach(entry =>{
            const div = entry.target;
            
            div.classList.toggle("unset", entry.isIntersecting);
        })
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    const observar = new IntersectionObserver(triggerAnimation, options);
    elements_right.forEach( element=>{
        observar.observe(element);
    })
    elements_left.forEach( element=>{
        observar.observe(element);
    })
    elements_top.forEach( element=>{
        observar.observe(element);
    })
    elements_bottom.forEach( element=>{
        observar.observe(element);
    })

}(jQuery));

