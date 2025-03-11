//importar clase de componentes 
import { ComponentRecomendacion } from "./Components/ComponentRecomendacion.js";
//importar datos de las recomendaciones
import data from "./Data/Recomendaciones.js";
const initialLoad = () => {
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

    //Componentes de recmoendaciones
    const mitad = Math.ceil(data.length / 2);
    
    const primeraMitad = data.slice(0,mitad);
    
    const segundaMitad = data.slice(mitad);
    
    
    const componentes = () => {
        for(let recomendacion of primeraMitad){
            const divComponent = new ComponentRecomendacion({values: [recomendacion.Recomendacion]},"fade-right");
            document.getElementById("section-fade-right").appendChild(divComponent.render());             
        }
        for(let recomendacion of segundaMitad){
            const divComponent2 = new ComponentRecomendacion({values: [recomendacion.Recomendacion]},"fade-left");
            document.getElementById("section-fade-left").appendChild(divComponent2.render());
        }
    };
    componentes();


    //Efectos 
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


};

window.addEventListener("load",()=>{
    initialLoad();
});