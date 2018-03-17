var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("navbar-expand-sm-colored");
        myNav.classList.remove("navbar-expand-sm-transparent");
    } 
    else {
        myNav.classList.add("navbar-expand-sm-transparent");
        myNav.classList.remove("navbar-expand-sm-colored");
    }
};