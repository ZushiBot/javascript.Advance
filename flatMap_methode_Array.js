/*flatMap methode*/

const greeting=['g','r',['e','e'],'t','i','n','g'];
const greeting_o=greeting.flatMap(greet=>{
	return greet+'o';
})
