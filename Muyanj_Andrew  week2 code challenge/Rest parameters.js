// rest parameters it gets the remaining arguments of the function and put them in an arry

function sum( y,z,... numbers){

    console.log (numbers)
    return y + z
}

let values= sum( 1,2,3,4,6,8)
console.log(values)




// example2

function myFun(a,  b, ...numbers) {
    console.log("a:", a)
    console.log("b:", b)
    console.log("numbers", numbers)
  }
  
  myFun("one", "two", "three", "four", "five", "six")




//   example 3


function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 15, 25, 42)
  console.log(arr)  

  