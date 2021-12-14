// destructing is when you compose the properties of an object or the index of an array to separate them to create specific variable 

// example1
const number = [ 1,2,3,4];
const x = number[0];
const y = number[1];
const z = number [2];
const w = number[3];
console.log ( x,y,z,w)

// example 2
const numbers =[ 1,2,3,4,5];
const [x,y,z,w] = numbers
console.log( x,y,z,w)
// example 3
const numbers = [3,4,5,6];
const [ ,, z] = numbers
console.log (z)

//Destructuring nested Array 

const numbers = [ 1, [10,24], 2,3,4,5]
const [ x, [y,z]] = numbers;
console.log(x,y,z)

//  destructuring an object

const person = {
    name:"andre",
    age:"20",
    course:"digital programming"
}
console.log( person.course);


// OR
const person = {
        name:"andre",
        age:"20",
        course:"digital programming"
        
    }
    const { age} = person;
    console.log(age);

    //or 
const person = {
    name:"andre",
    age:"20",
    course:"digital programming",
    address: {
        city: 'kampala',
        country: " uganda"
}
      

    }
   
// console.log(person.address.country)
const { address:{city}}= person;
console.log(city)






