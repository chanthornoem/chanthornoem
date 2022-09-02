function msg(){
    var i;
    var j;
for (i = 0; i <= 4; i++ )
{
document.write("</br>");
for ( j = 0; j < 4-i; j++ )
{
document.write( "*" );
}
/*for ( j = 5-i; j <= 4; j++ )
{

document.write( "*" );
}*/
}
}
function msg1(){
    var i;
    var j;
    for(i = 0; i < 4; i++){
        document.write("</br>");
        for(j = 4-i ; j <= 4; j++){
            document.write("*");
        }
    }
}