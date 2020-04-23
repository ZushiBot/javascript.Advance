/*
Pass by Reference
::: Actual Meaning :::
*** They Are in the Same box ***
    If we Change anything to the box
    it will effect others too 
:::::::::::::::::::::::::

To Avoid This , There is a way (methode Actually) called as .concat();
*/


var a=[1,2,3,4,5];
var b= [].concat(a);
b.push(6);
console.log('a=',a);
console.log('b=',b);
