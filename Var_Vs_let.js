/*
The main difference between var and let is scope .
1)var defined variables can access parent scopes ,but let can'nt.
2)That means let defiend variables can'nt be use in child scope.
*/


var a=5;//var can be accessed outside the loop
function aa(){
    var a=1; // new variable in this function;
    console.log("1" ,a);
}//
function ab(){
    a=2;// it will check if its parent variable knows a.
    console.log("2",a);
}//Only this will effect variable
function ac(){
    let a=3;//a new variable , only for this function.
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
let a=5;// because this a variable defined as let , its child scope can'nt use a varible.
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
//for (int i=0;i<n;i++):::::::::for(let i=0;i<n;i++)::::::::::::::
