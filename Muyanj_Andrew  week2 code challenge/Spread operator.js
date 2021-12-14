// spread operator is anew addition to the set of operators in js  Es6 
// eg an array and expands it into individual element

// examples
var names1=["Andrew","Rebecca"]
var names2 = ["ian ","Nico"]
var combined =[... names1,...names2]
console.log (combined)

// example 1
// copying an array 
var names =[ "andy", "steven"]
var names2 =[...names]
console.log( names2)
// example 2
function multiply ( num1, num2, num3){
    console.log(num1*num2*num3)
}
let num = [ 3,2,3]
multiply(...num)

//example 3
let Eats = ['cake', 'cookie', 'donut'];
let drinks = ['icecream', 'flan', 'frozen yoghurt', ...Eats];
console.log(drinks);

let Eats1= ['icecream', 'flan', ...Eats, 'frozen yoghurt'];
console.log(Eats1);


// example 4
function Area (base,height){
    console.log(base*height/2)

}
let numbers =[ 3,4]
Area(...numbers)
