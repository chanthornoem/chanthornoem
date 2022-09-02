var nmu_text = "This text will be added to html";
//create anew paragrap element
var newParagraph = document.createElement("p");
//creatre text
var newText = document.createTextNode(nmu_text);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);