/*
Use Array Methodes in Objects

2 ways 

::: Old Way :::
keys

::: New Way :::
value
entries
*/


//Old way with Keys

let obj={
	username0:'raihan',
	username1:'musfiq',
	username2:'tofutang'
}
let temp=[];
Object.keys(obj).forEach((key ,index) =>{
	temp.push(obj[key]);
})

//Latest Way with entries and values

let hoho=Object.entries(obj).map(temp =>{
	return temp[1]+temp[0].replace('username','');
})
