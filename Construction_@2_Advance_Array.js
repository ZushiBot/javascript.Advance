const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Old Way of Construction
const target=[];
array.forEach(temp =>{
  let t_username=temp.username;
  t_username=t_username+"!";
  target.push(t_username);
});

//EM6 Construction methode
const target=[];
array.forEach(temp =>{
  let {username}=temp;
  username=username+"!";
  target.push(username);
});
