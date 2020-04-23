/*
reduce Methode in Advance Array
*/

const array =[1,2,4,16,32];
const reduceArray= array.reduce((accumulator,temp) =>
                               {
    return accumulator+temp;
},0);

//Here Accumulator is acting as storage , and here output is not an array.(***)
