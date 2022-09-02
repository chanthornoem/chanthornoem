function msg() {
    var a, b, c, n;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    n = a + b + c;
    document.getElementById("n").innerHTML = n;

}