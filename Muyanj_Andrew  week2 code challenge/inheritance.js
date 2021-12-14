// inheritance  it extends

// constructors is a special method for creating and initializing an object created with class

// or it is used to create an object instance and assign the value for the properties

// example
class Animal{
      constructor(type,color){
          this.type = type;
          this.color = color
      }
      identify(){
          console.log(this.type,"is an animal");
      }
      getColor(){
        console.log(this.color,"is a color")

      }
  
  }
  let cat = new Animal("cat","red");
console.log(cat)


cat.identify()
cat.getColor()



class animalType extends Animal {
  constructor( type,color,culture){
super(type,color)
this.culture = culture;

  }
}
 let animal = new animalType("cat","red","african")
 console.log(animal)




class Student1{
  constructor(name,id,index){
      this.name = name;
      this.id = id;
      this.index = index;
  }
  // methods
  getName(){
      console.log(this.name, "is your name")
  }

  // method
  getId(){
      console.log(this.id )
  }

}

let studentDetails = new Student1("MUYANJA",402655542, "FA2/256")
// let studentDetail = new Student1("ANDREW",402979872, "FA27/226")

// console.log(studentDetails)
// console.log(studentDetail)
studentDetails.getName();
studentDetails.getId()

// inheritance
class Student2 extends Student1{
  constructor(name,id,index,uniform){
      super(name,id,index)
      this.uniform = uniform;
  }
  getName(){
      console.log(this.uniform, "is your uniform")
  }


}
let student2details = new Student2("ANDREW", 878864, "ue03/6+5","RED and WHITE")
// console.log(student2details)
student2details.getName();


// example


class Animal {
    constructor(name, fierce) {
      this._name = name;
      this._fierce = fierce;
    }
  
    get name() {
      return this._name;
    }
  
    get fierce() {
      return `This animal is ${ this._fierce ? 'fierce' : 'tame' }`;
    }
  
    toString() {
      return `This is a ${ this._fierce ? 'fierce' : 'tame' } ${this._name}`;
    }
  }
  
  class Felidae extends Animal {
    constructor(name, fierce, family) {
      super(name, fierce);
      this._family = family;
    }
  
    family() {
      return `A ${this._name} is an animal of the ${this._family} subfamily under the ${Felidae.name} family`;
    }
  }

  var Tiger = new Felidae('Tiger', true, 'Pantherinae');

console.log(Tiger.toString()); 
console.log(Tiger.family());