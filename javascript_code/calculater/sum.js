function calladd(){
    var a,b,s;
    a = parseFloat(document.getElementById("num1").value);
    b = parseFloat(document.getElementById("num2").value);
    s = a + b;
    document.getElementById("result").value=s;
}