'use strict';
/**
 * Exercice 1
 */

var number= 17;

if (number>=18) 
{
    alert("Vous êtes majeur, vous pouvez entrer au club");
}
else if (number>=17) 
{
    alert("Vous n'êtes pas majeur, vous ne pouvez pas entrer au club. Mais c'est pour bientôt !");
}
else 
{
    alert("Vous n'êtes pas majeur, vous ne pouvez pas entrer au club");
}

/**
 * Exercice 2
 */

 var rand=Math.floor((Math.random() * (32) + 1) ;

 if ((rand>0 && rand<10))

{
     alert("cool");

} else if((rand>11) && (rand<20)) 
{ 

     alert("Tiped");

} else ((randr>21) && (rand<30))
{

    alert("warm")
}