function getBodyScrollTop () { const el = document.scrollingElement || document.documentElement; return el.scrollTop }
window.onscroll = function () { 

    "use strict";
    if (getBodyScrollTop() >= 150 ) {
        $('.navbar-custom').addClass('navbar-colored');
    } 
    else {
        
        $('.navbar-custom').removeClass('navbar-colored');
    }
   
};

