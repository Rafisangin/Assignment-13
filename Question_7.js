// Question 7
// write a js function to revers a srting
function reversed_string(words) {
    let reversed='';
    for (let i =words.length-1; i>=0;i--){
        reversed+=words[i];
    }
    return reversed;
}
console.log(reversed_string("hi"));