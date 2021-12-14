// Abstraction ia away of hidding the implementation details and showing only the functionality to the user


function Employee( name,age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary;
    let monthlyBonus = 1000;
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus;
        console.log('finalSalary is;'+ finalSalary);
    }
this.getEmpDetails = function(){
    console.log('Name:'+   this.name   ) 
    console.log('Age:'+ this.age)
    calculateFinalSalary();
}
}
let Emp1 = new Employee('Andrew',30,2000);
Emp1.getEmpDetails()
