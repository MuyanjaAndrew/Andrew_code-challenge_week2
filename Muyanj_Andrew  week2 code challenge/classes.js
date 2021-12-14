// //  classes  are templates for crating objects
// // Syntax
// // class user{

// // }

// example
class person{

    constructor( name , ID, user_name, email, password){
        this.name = name;
        this.ID = ID;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
    getName (){
        console.log(this.name, "is your name")
        console.log( this.ID,"is my national ID")
        console.log(this.user_name,"is my user_name on facebook")
    }
}
let worker = new person("Andrew","1234567898","Myth-Andy","agh123@gmail.com","24567");
worker.getName();



// example 2
class Animal{
    constructor(type){
        this.type = type;
    }
    identify(){
        console.log(this.type,"is an animal");
    }

}
let cat = new Animal("cat");
cat.identify();

// example 3
class Animal {
    constructor(name, fierce){
      this._name = name;
      this._fierce = fierce;
    }
  
    static animalExamples() {
      return `Some examples of animals are Lion, Elephant, Sheep, Rhinoceros, etc.`
    }
  }
  console.log(Animal.animalExamples()); 