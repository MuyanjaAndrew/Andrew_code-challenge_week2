export let a =10
b=20
result = 0;

export function sum(){
    result = a +b
    return result;

}
export function multiply (){
    result = a + b;
    return result;

}

import { a,b, result,sum,multiply} from './rs'
sum()
console.log(result);
multiply()
console.log(result);