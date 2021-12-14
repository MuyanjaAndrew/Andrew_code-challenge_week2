// var = function scope
// let = block scope

// var
var cows = 2;
function myCows (){
    var cows = 2;
    if (cows < 5){
        console.log(`i have ${cows} cows`);
    }else{
        console.log("That is a lot of cows !");
    }
}

if(true){
    let cows =15

}
console.log(cows);

myCows();


// when using var you can console in and outside the cali brackets "when you console inside the bracket it console from 0 - 9 but when you console outside the bracket it gives you only 10 "

for(var p =0; p<10; p++){
    console.log(p)  
}
// console.log(p)




// using let  you console in the {} when you console outside the brackets it gives an error
for(let  q =0; q<5; q++){
    console.log(q)
}

// example1

// the variable declared by the let keyword are mutable. it means that you can change their values anytime you want 
// however variables  created by const are immutable you can't reassign them to different values
let m = 12;
m = 4;
m = m+4;
console.log(m);


// example 2

// javascript const in a for loop

let scores = [30,25,95];
for(const score of scores){

    console.log(score);
}

// other example
const Area  = 40  

console.log(Area)





const color =['red'];
color.push('green');
console.log(color);




const child = { age:12};
child.age = 30;
console.log(child.age)