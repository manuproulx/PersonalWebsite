// set up text to print, each item in array is new line
var aText = new Array(
    "<I like to build great things/>");
var iSpeed = 125; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerText = sContents + aText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        setTimeout("appendDownArrow()", 1000)
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);

        }
    } else {

        setTimeout("typewriter()", iSpeed);1
    }
}

setTimeout("typewriter()", 1000)

function appendDownArrow(){
    var button = document.createElement("div")
    button.setAttribute("id", "arrowDownDiv")
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