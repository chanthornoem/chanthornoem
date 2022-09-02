const fruits = ["banna","orange","Apple"];
document.getElementById("demo").innerHTML=fruits;
function add(){
    fruits.push("Lemon")
    //
    document.getElementById("demo").innerHTML=fruits;
}