const randomNumber = Math.floor(Math.random() * 250) + 1;


const randomNumberdiv = document.getElementById('randomNumberDisplay');

randomNumberdiv.textContent = randomNumber + ' lidí';


(function($){
    $(function(){
        
        /* Scroll to sections */
        $(".jq--scroll-nabor").click(function(){
            $("html, body").animate({scrollTop: $(".jq--nabor").offset().top}, 500);
        });
 
        $(".jq--scroll-staff-team").click(function(){
            $("html, body").animate({scrollTop: $(".jq--staff-team").offset().top}, 2000);
        });
    });
})(jQuery);