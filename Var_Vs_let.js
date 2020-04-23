var a=5;//var can be accessed outside the loop
function aa(){
    var a=1;
    console.log("1" ,a);
}//
function ab(){
    a=2;
    console.log("2",a);
}//Only this will effect variable
function ac(){
    let a=3;
    console.log("3",a);
}
function last(){
    console.log(a);
}
aa();// X
console.log(a);
ab();// Changed
console.log(a);
ac();// X
console.log(a);
last();

/*
let a=5;
function aa(){
    var a=1;
    console.log("1" ,a);
}//
function ab(){
    a=2;
    console.log("2",a);
}
function ac(){
    let a=3;
    console.log("3",a);
}
aa();// X
console.log(a);
ab();// Changed
console.log(a);
ac();// X
console.log(a);
*/

//when let variable is dicleared (as parent), No child can use that variable (name) again 
