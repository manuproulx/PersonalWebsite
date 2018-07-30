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

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollOverflow:true
});

//methods
fullpage_api.setAllowScrolling(true);

new Typewriter(125, document.getElementById("typedtext"), "<I like to build great things/>", "appendDownArrow()")

function appendDownArrow(){
    var button = document.createElement("div")
    button.setAttribute("id", "arrowDownDiv")
    button.onclick = function(){
        fullpage_api.moveSectionDown()
    }
    document.getElementById("selectionDiv").appendChild(button)
    var text = document.createElement("span")
    text.innerHTML = "Take the tour"
    var icon = document.createElement("i")
    icon.setAttribute("class", "material-icons")
    icon.setAttribute("id", "arrowDown")
    icon.innerHTML = "keyboard_arrow_down"
    document.getElementById("arrowDownDiv").appendChild(text)
    document.getElementById("arrowDownDiv").appendChild(icon)
}