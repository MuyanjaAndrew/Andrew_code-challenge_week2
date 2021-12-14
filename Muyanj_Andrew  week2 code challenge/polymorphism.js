// // polymorphism is an ability of an object existing in many forms

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
culture(){
    console.log(this.culture,"is the culture")
}
}
let animal = new animalType("cat","red","african")
console.log(animal)

animal.culture()




// classes

// example

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

let studentDetails = new Student1("REBECCA",402655542, "UTY/256")
// let studentDetail = new Student1("ROCK",402979872, "UTY/226")

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
let student2details = new Student2("ANDRTEW", 878864, "UK03/6665","black and white")
console.log(student2details)
