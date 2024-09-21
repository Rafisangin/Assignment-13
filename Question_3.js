// Question number three
// Make a funtion to count a vowel is a string
function countVowel(inputWord) {
    // a varible for stroing the number of vowel
    var vowels="aeioAEIOU"
    var count=0;
    for (let i=0; i<inputWord.length;i++) {
    if ( vowels.includes(inputWord[i])) {
        count++;
    }
    }
    return count;
}
console.log(countVowel("hello apple "));
