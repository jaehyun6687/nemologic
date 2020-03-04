function make(n) {
    var i, j;
    document.write('<span id="rows">');
    document.write('<div class="columns" style="height: 200px;">');
    document.write('<div></div>');
    for (i = 0; i < n; i++) {
        document.write('<span><div class="ga_num"></div></span>');
    }
    document.write('</div>');
    for (i = 0; i < n; i++) {
        document.write('<div class="columns" onmousedown="mouseclick()" onmouseover="mouseover()" onmouseup="mouseup(' + n + ')">');
        document.write('<span><div class="se_num"></div></span>');
        for (j = 1; j <= n; j++) {
            document.write('<div id="' + (n * i + j) + '" class="white" style="background-color: white;"></div>');
        }
        document.write('</div>');
    }
    document.write('</span>');

    var border = 5 - (n / 10);
    $('#rows').css('grid-template-rows', '200px repeat(' + n + ', ' + (600 / n) + 'px)');
    $('.columns').css('grid-template-columns', '200px repeat(' + n + ', ' + (600 / n) + 'px)');
    $('.white').css({ 'height': (600 / n - border) + 'px', 'width': (600 / n - border) + 'px', 'border': border + 'px solid rgb(57, 240, 209)' });
    $('.ga_num').css({ 'width': (600 / n - border) + 'px', 'left': border + 'px' });
}


var isdown;

function mouseclick() {
    isdown = true;
    var i = document.getElementById(event.target.id);
    var but = document.getElementById("colorcg");
    if (i.style.backgroundColor == "white") but.style.backgroundColor = "black";
    else but.style.backgroundColor = "white";
    mouseover();
}
function mouseup(n) {
    isdown = false;
    change(n);
}

function mouseover() {
    if (isdown) {
        var x = document.getElementById(event.target.id);
        if (document.getElementById("colorcg").style.backgroundColor == "black") x.style.backgroundColor = "black";
        else x.style.backgroundColor = "white";
    }
}

function change(n) {
    for (var j = 0; j < n; j++) {
        var pos = document.getElementsByClassName("ga_num")[j];
        var x, count, num, result;
        result = ""; count = 0;
        for (var i = 0; i < n; i++) {
            num = j + 1 + (n * i);
            x = document.getElementById(num);
            if (x.style.backgroundColor == "black") count++;
            else {
                if (count != 0) {
                    result += count + "<br>"
                    count = 0;
                }
            }
        }
        if (count != 0) result += count;
        if (result == "") result = "0";
        pos.innerHTML = result;

        pos = document.getElementsByClassName("se_num")[j];
        result = ""; count = 0;
        for (var i = 1; i <= n; i++) {
            num = (n * j) + i;
            x = document.getElementById(num);
            if (x.style.backgroundColor == "black") count++;
            else {
                if (count != 0) {
                    result += count + "&nbsp;"
                    count = 0;
                }
            }
        }
        if (count != 0) result += count + "&nbsp;";
        if (result == "") result = "0" + "&nbsp;";
        pos.innerHTML = result;
    }
}