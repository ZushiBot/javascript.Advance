/*
This way object properties can have default values
:::Syntax:::
const {  property1 , property2  } =    obj;
(v.t) (which property wanna grab)  (from where)
*/
const obj={
    username:'Andrue',
    exp:'100',
    power:"Fire Blast"
}
//Old way Of grabing/construction
const username =obj.player;
let exp =obj.exp;
const power=obj.power;
//Grabber/Construction/default value for obj property
const {username,power} = obj;
let {exp} =obj;
