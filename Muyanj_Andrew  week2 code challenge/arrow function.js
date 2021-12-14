//  it allows you to create a function in a cleaner way . compared to other functions
//  let x = ( x,y) => x*y
/**x is the name of the function
(x,y) are the function arguments
x*y is the function body.*/

let sum = (a,b ) => {
    let  result = a + b;
    return result;

}
let result =sum( 10,20) 
console.log (result)

// arrow function as an expression
let age  = 80
let welcome = (age <18)?

() => console.log('baby'):

() => console.log('Adults')

welcome()

// Arrow function with no argument
let  tick = () => console.log('hello world!')
tick();


//  Arrow function with an argument 
let greeting = y => console.log(y);
greeting ( 'How are you Maran Andy i miss you so much');