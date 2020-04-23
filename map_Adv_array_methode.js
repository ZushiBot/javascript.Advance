/*
Map Methode Advance Array
::: conditions :::
1)have to return something.
2)use complete function to complete task
::: Syntax :::
(temp => {
  return temp*2;  //each time do task one by one and return values one by one to a target array by using return
})
*/

const array =[1,2,4,16,32];
const mapArray=array.map(temp =>{
    return temp*2;
});
// map use path that loops each elements and return each element to tha new array everytime.(((return***)))
