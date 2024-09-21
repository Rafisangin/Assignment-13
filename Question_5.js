 // Question number 5
 // js function to find a max number in array 
function find_max_number(arr) {
    var largest_number=arr[0];
    for(let i=1; i<=arr.length;i++){
        if (arr[i]> largest_number) {
            largest_number=arr[i];
            
        }
    }
    return largest_number;
}
const number1=[10,34,56];
console.log(find_max_number(number1));