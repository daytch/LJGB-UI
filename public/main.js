$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 30) {
            //clearHeader, not clearheader - caps H
            $(".navbar-light").addClass("white");
        }
    }); //missing );
})