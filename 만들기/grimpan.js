var num = prompt();

document.write("<div id='rows''>");
for (var i = 0; i < num; i++) {
    document.write("<div class='columns' onmousedown='mouseclick()' onmouseover='mouseover()' onmouseup='mouseup()'>");
    for (var j = 0; j < num; j++) {
        var w = i * num + j;
        document.write("<span id='" + w + "' class='white' style='background-color: white;'></span>");
    }
    document.write("</div>");
}
document.write("</div>");

var c = 750 / num;
var d;
if (num / 10 < 5) d = 5 - num / 10;
else d = 1;
$("#rows").css("grid-template-rows", "repeat(" + num + ", " + c + "px)");
$(".columns").css("grid-template-columns", "repeat(" + num + ", " + c + "px)");
$(".white").css({ "height": (c - d) + "px", "width": (c - d) + "px", "border": d + "px solid rgb(57, 240, 209) " });

var isdown;

function mouseclick() {
    isdown = true;
    var i = document.getElementById(event.target.id);
    var but = document.getElementById("colorcg");
    if(i.style.backgroundColor == "white") but.style.backgroundColor = "black";
    else but.style.backgroundColor = "white";
    mouseover();
}
function mouseup() {
    isdown = false;
}

function mouseover() {
    if (isdown) {
        var x = document.getElementById(event.target.id);
        if (document.getElementById("colorcg").style.backgroundColor == "black") x.style.backgroundColor = "black";
        else x.style.backgroundColor = "white";
    }
}