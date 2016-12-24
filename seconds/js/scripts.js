// Get all your elements stores
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var h = document.getElementById("h");
var i = document.getElementById("i");
var j = document.getElementById("j");
var astored = a.getAttribute("data-in");
var bstored = b.getAttribute("data-in");
var dstored = d.getAttribute("data-in");
var estored = e.getAttribute("data-in");
var hstored = h.getAttribute("data-in");
var istored = i.getAttribute("data-in");

function calculate(input1, input2, output) {
    output.innerHTML = input1.value * input2.value;
}
function add(input1, input2, input3, output) {
    output.innerHTML = parseInt( input1.innerHTML ) + parseInt( input2.innerHTML ) + parseInt( input3.innerHTML );
}
setInterval(function(){
    var temp;

    if (a == document.activeElement) {
        temp = a.value;
        if (astored != temp){
            astored = temp;
            a.setAttribute("data-in",temp);
            calculate(a, b, c);
        }
    } else if (b == document.activeElement) {
        temp = b.value;
        if (bstored != temp) {
            bstored = temp;
            b.setAttribute("data-in",temp);
            calculate(a, b, c);
        }
    } else if (d == document.activeElement) {
        temp = d.value;
        if (dstored != temp) {
            dstored = temp;
            d.setAttribute("data-in",temp);
            calculate(d, e, f);
        }
    } else if (e == document.activeElement) {
        temp = e.value;
        if (estored != temp) {
            estored = temp;
            e.setAttribute("data-in",temp);
            calculate(d, e, f);
        }
    } else if (h == document.activeElement) {
        temp = h.value;
        if (hstored != temp) {
            hstored = temp;
            h.setAttribute("data-in",temp);
            calculate(h, i, j);
        }
    } else if (i == document.activeElement) {
        temp = i.value;
        if (istored != temp) {
            istored = temp;
            i.setAttribute("data-in",temp);
            calculate(h, i, j);
        }
    }
	 add(c, f, j, elem_to_print_into);
}, 50);

a.onblur = calculate(a, b, c);
b.onblur = calculate(a, b, c);
d.onblur = calculate(d, e, f);
e.onblur = calculate(d, e, f);
h.onblur = calculate(h, i, j);
i.onblur = calculate(h, i, j);
calculate(a, b, c);
calculate(d, e, f);
calculate(h, i, j);
