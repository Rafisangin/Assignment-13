// Questin number 6 
// js function to find factorial using while loop
function find_factorial(number) {
    let result=1;
    let i=number;
    while(i>1){
        result *=i;
        i--;
    }
    return result;
}
const number2=5
const result=find_factorial(number2)
console.log(result);