/*
:::syntax:::
class Target {
      constructor(property1,property2){
      this.property1=property1;
      this.property2=property2;
      }
    introduce()//using function to this
    {xxxxxxxxxxx}
  }
class Main {
    constructor (property1,property2){
    super (property1,property2)
    }
    play()
    {xxxxxxxx};
  }
const wiz1 =new Main ('choice','choice');

::::::::::::::::::::::::::Devided in 3 steps::::::::::::::::::
1) target class
2) main class
3) using main class make varibles that has main class type objects and also access of target class and main class.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


class Player {
    constructor (name,type){
    this.name=name;
    this.type=type;
    }
 introduce(){
     console.log(`WEEEE I'm a ${this.name}`);
 }
}

class Wizard extends Player{
    constructor(name,type){
        super(name,type)
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1=new Wizard ('Raihan','Dark type');
