// Question number 4 
// find a palindromein a string
// we must make a function to take one parmter
function check_palindrome(string) {
const arrayvalues=string.split('');
const reverseArrayvalues=arrayvalues.reverse()
const revrseString=reverseArrayvalues.join('');
if (revrseString==string) {
    console.log("it is palindrome");
}else{
console.log(" it is not palindrome");
}
}
const string=prompt("enter a string");
check_palindrome(string);
















