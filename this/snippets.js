// Q1: blubank (it has strange behvior on node engine!)

const name = "blu web";
// var name = "blue web";
console.log(this, this.name); // Window, undefined

var name2 = "blue web2";
console.log(this, this.name2); // Window, blue web2

var obj1 = {
  name: "blu",
  getName: () => {
    console.log(this, this.name);
  },
};

var obj2 = {
  name: "blu junior",
  getName: obj1.getName,
};
var getName = obj1.getName;
obj1.getName();
obj2.getName();
getName();
