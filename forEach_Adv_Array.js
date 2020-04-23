/*
Advance Array 
ForEach Methode
::: Syntax :::
array.forEach((temp) =>{
targetArray.push(statement);
}
*/
const array =[1,2,4,16,32]; //source array
const newArray=[];   //target array

array.forEach(temp => {
    newArray.push(temp*2);
});


