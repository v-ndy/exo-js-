'use strict;'
/**
*Exercice1
**/ 
for(var i=0 ; i<=10 ; i++)
{
     console.log("5" + "*" + i +  "=" + 5*i );
}

var string = "<ul>";
var string2= "<li></li>"
var string3= "</ul>"

for(var i=0 ; i<=10 ; i++){
    string=string + "<li> 5 * " + i + " = " + 5 * i + "</li>" 

}

string = string + string3;
    
    console.log(string)
